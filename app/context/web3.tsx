import { createContext, useContext, useEffect, useState } from 'react';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import {
  Program,
  AnchorProvider,
  web3,
  utils,
  BN,
} from '@project-serum/anchor';
import { useWallet } from '@solana/wallet-adapter-react';
import IDL from '../utils/idl.json';
const { SystemProgram } = web3;

const Context = createContext({
  isLoading: false,
  setIsLoading: (value: boolean) => {},
  programId: PublicKey.default,
  createCampaign: (name: string, description: string) => {},
  campaigns: [],
  getAllCampaign: () => {},
  donateToCampaign: (campaign: PublicKey) => {},
  isVisible: false,
  setIsVisible: (value: boolean) => {},
  withDrawFromCampaign: (campaign: PublicKey, amount: number) => {},
});

const programId = new PublicKey(IDL.metadata.address);
const network = clusterApiUrl('devnet');

const Provider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const wallet = useWallet();
  const connection = new Connection(network, 'processed');

  const getProvider = () => {
    const provider = new AnchorProvider(connection, wallet, {
      preflightCommitment: 'confirmed',
    });

    return provider;
  };

  const createCampaign = async (name: string, description: string) => {
    if (!wallet) return;

    setIsLoading(true);

    try {
      const provider = getProvider();
      const program = new Program(IDL as any, programId, provider);

      const [campaign] = await PublicKey.findProgramAddress(
        [
          utils.bytes.utf8.encode('CAMPAIGN_DEMO'),
          provider.wallet.publicKey.toBuffer(),
        ],
        program.programId
      );

      await program.methods
        .create(name, description)
        .accounts({
          campaign,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      getAllCampaign();

      console.log(
        `Campaign created successfully on address ${campaign.toString()}`
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getAllCampaign = async () => {
    setIsLoading(true);

    try {
      const provider = getProvider();
      const program = new Program(IDL as any, programId, provider);

      Promise.all(
        (await connection.getProgramAccounts(programId)).map(
          async (campaign) => ({
            ...(await program.account.campaign.fetch(campaign.pubkey)),
            pubKey: campaign.pubkey,
          })
        )
      ).then((campaigns) => setCampaigns(campaigns));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const donateToCampaign = async (pubKey: PublicKey) => {
    if (!wallet) return;

    setIsLoading(true);

    try {
      const provider = getProvider();
      const program = new Program(IDL as any, programId, provider);

      await program.methods
        .donate(new BN(0.1 * web3.LAMPORTS_PER_SOL))
        .accounts({
          campaign: pubKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      getAllCampaign();

      console.log(`Donated successfully to campaign ${pubKey.toString()}`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const withDrawFromCampaign = async (pubKey: PublicKey, amount: number) => {
    if (!wallet) return;

    setIsLoading(true);

    try {
      const provider = getProvider();
      const program = new Program(IDL as any, programId, provider);

      await program.methods
        .withdraw(new BN(amount * web3.LAMPORTS_PER_SOL))
        .accounts({
          campaign: pubKey,
          user: provider.wallet.publicKey,
        })
        .rpc();

      getAllCampaign();

      console.log(`Withdrew successfully from campaign ${pubKey.toString()}`);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCampaign();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exposed = {
    isLoading,
    setIsLoading,
    programId,
    createCampaign,
    campaigns,
    getAllCampaign,
    donateToCampaign,
    isVisible,
    setIsVisible,
    withDrawFromCampaign,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useWeb3 = () => useContext(Context);

export default Provider;
