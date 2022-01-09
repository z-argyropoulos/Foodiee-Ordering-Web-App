import { useParams } from 'react-router-dom';
import { Stack, Grid } from '@mui/material';
import StoreHeaderImage from '../components/StoreHeaderImage';
import StoreDetails from '../components/StoreDetails';
import StoreProductCatalog from '../components/StoreProductCatalog';
import { StoreDataProvider } from '../contexts/StoreDataContext';
import StoreCart from '../components/StoreCart';

const Store = () => {
  const { storeId } = useParams();

  return (
    <StoreDataProvider storeId={storeId}>
      <Stack sx={{ mt: '75px', mx: 2 }}>
        <StoreHeaderImage />
        <StoreDetails />
        <Grid container>
          <Grid item md={8}>
            <StoreProductCatalog />
          </Grid>
          <Grid item md={4} sx={{ px: 3 }}>
            <StoreCart storeId={storeId} />
          </Grid>
        </Grid>
      </Stack>
    </StoreDataProvider>
  );
};

export default Store;
