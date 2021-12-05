import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import StoreHeaderImage from '../components/StoreHeaderImage';
import StoreDetails from '../components/StoreDetails';
import StoreProductCatalog from '../components/StoreProductCatalog';
import { useState, useEffect, useCallback } from 'react';
import { getStore } from '../services/stores';
import { storeInterface } from '../interfaces/stores';

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
      <StoreProductCatalog catalog={store.catalog} />
    </Stack>
  );
};

export default Store;
