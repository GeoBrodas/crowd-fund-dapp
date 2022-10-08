import { Button, Container, Loading, Text } from '@nextui-org/react';
import { IoMdAdd } from 'react-icons/io';
import { useWeb3 } from '../../context/web3';
import ListCampaigns from './ListCampaigns';

function CampaignListandCreate() {
  const { getAllCampaign, isLoading } = useWeb3();

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        css={{
          width: '70%',
          display: 'flex',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text h3>Create or fund campaigns</Text>

        <Container
          css={{
            margin: '0',
            width: 'auto',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Button
            css={{
              width: '10px',
              marginRight: '10px',
            }}
            ghost
            disabled={isLoading}
            onClick={() => getAllCampaign()}
          >
            {isLoading ? <Loading /> : 'Refresh'}
          </Button>

          <Button
            bordered
            iconRight={<IoMdAdd size={'20px'} />}
            css={{
              width: '220px',
            }}
          >
            Create New Campaign
          </Button>
        </Container>
      </Container>

      {/* List campaigns */}
      <ListCampaigns />
    </Container>
  );
}

export default CampaignListandCreate;
