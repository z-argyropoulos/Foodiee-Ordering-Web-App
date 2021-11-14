import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#141414',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffeb3b',
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
    borderRadius: 20,
  },
});
