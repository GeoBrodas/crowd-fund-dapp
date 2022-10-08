import { Container, Navbar, Text } from '@nextui-org/react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function Landing({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#DFF6FF',
      }}
    >
      <Navbar
        css={{
          backgroundColor: 'var(--accents-1)',
          marginBottom: '2rem',
        }}
        isBordered
        variant={'floating'}
      >
        <Navbar.Brand>
          <Text weight={'bold'} size={'larger'}>
            GoFundMe
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>About us</Navbar.Item>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Item>
            <WalletMultiButton
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid black',
                borderRadius: '10px',
              }}
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Container>{children}</Container>
    </div>
  );
}

export default Landing;
