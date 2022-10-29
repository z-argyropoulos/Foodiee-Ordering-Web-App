import { createTheme } from '@mui/material';

export const progressBarColor = '#ffeb3b';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#141414',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffeb3b',
    },
    info: {
      main: '#fff',
    },
    text: {
      primary: '#ffffff',
    },
    background: {
      paper: '#434343',
      default: '#242424',
    },
  },
  shape: {
    borderRadius: 15,
  },
});
