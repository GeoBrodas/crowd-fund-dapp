import { Button, Container, Text } from '@nextui-org/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Wallet } from '../wallet/Wallet';

function EntryIndex() {
  const wallet = useWallet();

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80vh',

        '@md': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Text h2>
        The{' '}
        <span
          style={{
            background:
              'linear-gradient(45deg, #484b4e, #354f71, #2e4f92, #4a46ab, #7c2cb7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Web3
        </span>{' '}
        Dapp for fundraising
      </Text>

      <Text
        h5
        css={{
          color: '$gray800',
        }}
      >
        GoFundMe is a Dapp that allows you to create a campaign to fund your
        campaigns, seed your business, or fund your dreams.
      </Text>

      <Button
        css={{
          width: 'auto',
          '@xs': {
            width: 'fit-content',
          },
        }}
      >
        Explore other campaigns
      </Button>
    </Container>
  );
}

export default EntryIndex;
