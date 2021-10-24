import { theme } from './theme/muiTheme';
import { ThemeProvider, Paper } from '@mui/material';
import MenuAppBar from './components/MenuAppBar';
import CardsGridWrapper from './components/CardsGridWrapper';
import LandingImage from './components/LandingImage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <MenuAppBar />
        </header>
        <LandingImage />
        <Paper
          square
          style={{
            backgroundColor: '#242424',
            minHeight: 'calc(100vh - 60px)',
          }}>
          <CardsGridWrapper />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;