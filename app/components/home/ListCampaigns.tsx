import { Button, Card, Container, Loading, Text } from '@nextui-org/react';
import { BN } from '@project-serum/anchor';
import { useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { IoMdCash, IoMdHeart } from 'react-icons/io';
import { useWeb3 } from '../../context/web3';

function ListCampaigns() {
  const { campaigns, isLoading, donateToCampaign, withDrawFromCampaign } =
    useWeb3();
  const { publicKey } = useWallet();

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <Loading
          color="primary"
          size="lg"
          css={{
            margin: '20px 0',
          }}
        />
      ) : (
        campaigns.map((campaign, index) => (
          <Card
            css={{
              margin: '10px 0',
              width: '100%',
              padding: '0 20px',
              alignItems: 'start',

              '@sm': {
                width: '100%',
                alignItems: 'center',
              },
              '@md': {
                width: '70%',
                alignItems: 'center',
              },
            }}
            key={index}
          >
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                '@sm': {
                  flexDirection: 'row',
                },
              }}
            >
              <div>
                <Text h5 size="large">
                  {campaign.name}
                </Text>
                <Text color="gray" size="$md">
                  {campaign.description}
                </Text>
              </div>

              <Container
                css={{
                  margin: '0',
                  padding: '0',
                  display: 'flex',
                  width: 'fit-content',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '10px',
                  gap: '10px',

                  '@sm': {
                    flexDirection: 'column',
                    gap: '0',
                  },
                }}
              >
                <Container
                  css={{
                    width: 'auto',
                    display: 'flex',
                    margin: '0',
                    padding: '0',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '5px',
                    '@sm': {
                      gap: '10px',
                    },
                  }}
                >
                  <Text
                    h5
                    size="large"
                    color="primary"
                    css={{
                      textAlign: 'left',

                      '@sm': {
                        textAlign: 'right',
                      },
                    }}
                  >
                    {campaign.amountDonated.toNumber() / LAMPORTS_PER_SOL}
                  </Text>
                  <Text h5 size="large">
                    $SOL raised
                  </Text>
                </Container>

                {publicKey && (
                  <Container
                    css={{
                      width: 'auto',
                      display: 'flex',
                      margin: '0',
                      padding: '0',
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: '5px',
                    }}
                  >
                    <Button
                      onClick={() => donateToCampaign(campaign.pubKey)}
                      auto
                      bordered
                    >
                      Donate <IoMdHeart />
                    </Button>
                    {new PublicKey(campaign.admin).toString() ===
                      publicKey.toString() && (
                      <Button
                        onClick={() =>
                          withDrawFromCampaign(
                            campaign.pubKey,
                            campaign.amountDonated.toNumber() / LAMPORTS_PER_SOL
                          )
                        }
                        auto
                        bordered
                      >
                        Withdraw <IoMdCash />
                      </Button>
                    )}
                  </Container>
                )}
              </Container>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}

export default ListCampaigns;
