import { useState, useEffect } from 'react';
import CardsGridWrapper from '../components/shared/CardsGridWrapper';
import LandingImage from '../components/LandingImage';
import { Paper } from '@mui/material';
import { getStores } from '../services/stores';

const Home = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch all stores
    getStores()
      .then((response) => {
        // fake server delay
        setTimeout(() => {
          setLoading(false);
          setStores(response.data.stores);
        }, 2 * 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <LandingImage />
      <Paper
        square
        style={{
          backgroundColor: '#242424',
          minHeight: 'calc(100vh - 60px)',
        }}>
        <CardsGridWrapper stores={stores} loading={loading} />
      </Paper>
    </>
  );
};

export default Home;
