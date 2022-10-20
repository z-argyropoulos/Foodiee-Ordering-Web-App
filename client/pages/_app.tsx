import Head from 'next/head';
import type { AppProps } from 'next/app';
import { theme } from '../src/theme/muiTheme';
import { ThemeProvider } from '@mui/material';
/* import MenuAppBar from '../src/components/MenuAppBar'; */

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
      <ThemeProvider theme={theme}>
        {/* <MenuAppBar /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
