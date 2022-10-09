import { Container, Text } from '@nextui-org/react';

function Footer() {
  return (
    <Container
      css={{
        padding: '2rem',
        backgroundColor: 'white',
      }}
    >
      <Container>
        <Text
          css={{
            color: '$gray600',
          }}
        >
          Made with ❤️ using <b>Next.js</b> + <b>Next-UI</b>
        </Text>

        <Text
          css={{
            color: '$gray600',
          }}
        >
          {/* copyright */}
          {new Date().getFullYear()} © GoFundMe
        </Text>
      </Container>
    </Container>
  );
}

export default Footer;
