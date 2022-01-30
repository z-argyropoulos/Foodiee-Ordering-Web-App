import { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import Filters from '../components/Filters';
import CardsGridWrapper from '../components/shared/CardsGridWrapper';
import { getStores } from '../services/stores';
import { useUser } from '../hooks/useUser';

const StoresList = () => {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const { address } = useUser();

  useEffect(() => {
    // fetch all stores
    getStores()
      .then((response) => {
        // fake server delay
        setTimeout(() => {
          setLoading(false);
          setStores(response.data.stores);
        }, 1.5 * 1000);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Stack sx={{ mt: '75px', mx: 2 }}>
      <Typography variant="h5" sx={{ my: 2, fontStyle: 'italic' }}>
        Showing{' '}
        {address ? `store results for ${address}` : 'all stores'}
      </Typography>
      <Filters
        stores={stores}
        setLoading={setLoading}
        setFilteredStores={setFilteredStores}
      />
      <CardsGridWrapper loading={loading} stores={filteredStores} />
    </Stack>
  );
};

export default StoresList;
