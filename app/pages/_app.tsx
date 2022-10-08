import { NextUIProvider } from '@nextui-org/react';
import { Wallet } from '../components/wallet/Wallet';
import Landing from '../layouts/Landing';
import Web3ContextProvider from '../context/web3';

function MyApp({ Component, pageProps }) {
  return (
    <Wallet>
      <NextUIProvider>
        <Web3ContextProvider>
          <Landing>
            <Component {...pageProps} />
          </Landing>
        </Web3ContextProvider>
      </NextUIProvider>
    </Wallet>
  );
}

export default MyApp;
