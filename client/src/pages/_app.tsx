import Head from 'next/head';
import type { AppProps } from 'next/app';
import { StoreCartProvider } from '../contexts/StoresCartContext';
import { UserProvider } from '../contexts/UserContext';
import { theme } from '../themes/muiTheme';
import { ThemeProvider } from '@mui/material';
import MenuAppBar from '../components/MenuAppBar';
import { wrapper } from '@redux/store';
import '../styles/app.scss';
import RouterProgressBar from '@components/RouterProgressBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RouterProgressBar />
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
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

export default wrapper.withRedux(MyApp);
