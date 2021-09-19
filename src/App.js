import './App.css';
import { theme } from './theme/muiTheme';
import { ThemeProvider, Button, Paper } from '@mui/material';
import MenuAppBar from './components/MenuAppBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <MenuAppBar />
        </header>
        <Paper square></Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
