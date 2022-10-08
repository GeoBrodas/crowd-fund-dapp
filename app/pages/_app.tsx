import { NextUIProvider } from '@nextui-org/react';
import { Wallet } from '../components/wallet/Wallet';
import Landing from '../layouts/Landing';

function MyApp({ Component, pageProps }) {
  return (
    <Wallet>
      <NextUIProvider>
        <Landing>
          <Component {...pageProps} />
        </Landing>
      </NextUIProvider>
    </Wallet>
  );
}

export default MyApp;
