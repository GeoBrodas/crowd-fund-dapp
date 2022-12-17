import { Button, Container, Text } from '@nextui-org/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { IoMdAdd } from 'react-icons/io';
import { useWeb3 } from '../../context/web3';
import CreateCampaignModal from './CreateCampaignModal';
import ListCampaigns from './ListCampaigns';

function CampaignListandCreate() {
  const { getAllCampaign, isLoading, isVisible, setIsVisible } = useWeb3();
  const wallet = useWallet();

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
      }}
    >
      <Container
        css={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',

          '@sm': {
            width: '100%',
            flexDirection: 'row',
          },
          '@md': {
            width: '70%',
            flexDirection: 'row',
          },
        }}
      >
        <Text
          css={{
            fontSize: '1.2rem',
            fontWeight: 'bold',

            '@md': {
              fontSize: '1.5rem',
              fontWeight: 'bold',
            },
          }}
        >
          Create or fund campaigns
        </Text>

        <Container
          css={{
            margin: '0',
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            css={{
              marginRight: '10px',
            }}
            auto
            disabled={isLoading}
            onClick={() => getAllCampaign()}
          >
            Refresh
          </Button>

          {wallet.publicKey && (
            <Button
              onClick={() => setIsVisible(true)}
              bordered
              iconRight={<IoMdAdd size={'20px'} />}
              auto
              flat
            >
              Create New Campaign
            </Button>
          )}
        </Container>

        <CreateCampaignModal
          visible={isVisible}
          closeHandler={() => setIsVisible(false)}
        />
      </Container>

      {/* List campaigns */}
      <ListCampaigns />
    </Container>
  );
}

export default CampaignListandCreate;
