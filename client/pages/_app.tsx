import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>
          Foodie - Order from multiple restaurants at the same time
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
