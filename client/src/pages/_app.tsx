import Head from 'next/head';
import type { AppProps } from 'next/app';
import { StoreCartProvider } from '../contexts/StoresCartContext';
import { UserProvider } from '../contexts/UserContext';
import { theme } from '../themes/muiTheme';
import { ThemeProvider } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';
import '../styles/app.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <StoreCartProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <MenuAppBar />
            <Component {...pageProps} />
          </ThemeProvider>
        </UserProvider>
      </StoreCartProvider>
    </>
  );
};

export default MyApp;
