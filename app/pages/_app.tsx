import { NextUIProvider } from '@nextui-org/react';
import Landing from '../layouts/Landing';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Landing>
        <Component {...pageProps} />
      </Landing>
    </NextUIProvider>
  );
}

export default MyApp;
