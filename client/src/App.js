import { theme } from './theme/muiTheme';
import { ThemeProvider } from '@mui/material';
import MenuAppBar from './components/MenuAppBar';
import Router from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <MenuAppBar />
        </header>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
