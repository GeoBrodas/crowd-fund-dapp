import { Container, Navbar, Text } from '@nextui-org/react';

function Landing({ children }) {
  return (
    <div>
      <Navbar isBordered variant={'floating'}>
        <Navbar.Brand>
          <Text>GoFundMe</Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>About us</Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Container>
        <div
          style={{
            paddingTop: '5rem',
          }}
        >
          {children}
        </div>
      </Container>
    </div>
  );
}

export default Landing;
