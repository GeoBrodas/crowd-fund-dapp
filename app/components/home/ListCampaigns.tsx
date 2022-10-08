import { Card, Container, Text } from '@nextui-org/react';
import { useWeb3 } from '../../context/web3';

function ListCampaigns() {
  const { campaigns, isLoading } = useWeb3();

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {campaigns.map((campaign, index) => (
        <Card
          css={{
            margin: '30px 0',
            width: '70%',
            padding: '0 20px',
          }}
          key={index}
        >
          <Card.Body>
            <div>
              <Text h5 size="large">
                {campaign.name}
              </Text>
              <Text color="gray" size="$md">
                {campaign.description}
              </Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default ListCampaigns;
