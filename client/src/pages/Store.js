import { useParams } from 'react-router-dom';
import { Stack, Grid } from '@mui/material';
import StoreHeaderImage from '../components/StoreHeaderImage';
import StoreDetails from '../components/StoreDetails';
import StoreProductCatalog from '../components/StoreProductCatalog';
import { useState, useEffect, useCallback } from 'react';
import { getStore } from '../services/stores';
import { storeInterface } from '../interfaces/stores';
import StoreCart from '../components/StoreCart';

const Store = () => {
  const { storeId } = useParams();

  const [store, setStore] = useState(storeInterface);

  const fetchStore = useCallback(() => {
    getStore(storeId).then(({ data }) => {
      setStore(data.store);
    });
  }, [storeId]);

  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  return (
    <Stack sx={{ mt: '75px', mx: 2 }}>
      <StoreHeaderImage {...store} />
      <StoreDetails {...store} />
      <Grid container>
        <Grid item md={8}>
          <StoreProductCatalog
            storeId={storeId}
            catalog={store.catalog}
          />
        </Grid>
        <Grid item md={4}>
          <StoreCart storeId={storeId} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Store;
