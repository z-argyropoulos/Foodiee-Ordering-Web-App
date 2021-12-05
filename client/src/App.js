import { theme } from './theme/muiTheme';
import { ThemeProvider } from '@mui/material';
import MenuAppBar from './components/MenuAppBar';
import Router from './routes/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
