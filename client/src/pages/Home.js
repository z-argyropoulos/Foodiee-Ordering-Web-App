import CardsGridWrapper from '../components/CardsGridWrapper';
import LandingImage from '../components/LandingImage';
import { Paper } from '@mui/material';

const Home = () => {
  return (
    <>
      <LandingImage />
      <Paper
        square
        style={{
          backgroundColor: '#242424',
          minHeight: 'calc(100vh - 60px)',
        }}>
        <CardsGridWrapper />
      </Paper>
    </>
  );
};

export default Home;
