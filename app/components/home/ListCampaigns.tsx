import { Button, Card, Container, Loading, Text } from '@nextui-org/react';
import { BN } from '@project-serum/anchor';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { IoMdHeart } from 'react-icons/io';
import { useWeb3 } from '../../context/web3';

function ListCampaigns() {
  const { campaigns, isLoading } = useWeb3();

  console.log(campaigns);

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
              margin: '30px 0',
              width: '70%',
              padding: '0 20px',
              alignItems: 'center',
            }}
            key={index}
          >
            <Card.Body
              css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
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
                  display: 'flex',
                  width: 'fit-content',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Container
                  css={{
                    display: 'flex',
                    margin: '0',
                    gap: '10px',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text h5 size="large">
                    $SOL raised
                  </Text>
                  <Text
                    h5
                    size="large"
                    color="primary"
                    css={{
                      textAlign: 'right',
                    }}
                  >
                    {campaign.amountDonated.toNumber() / LAMPORTS_PER_SOL}
                  </Text>
                </Container>

                <Button>
                  Donate <IoMdHeart />
                </Button>
              </Container>
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
}

export default ListCampaigns;
