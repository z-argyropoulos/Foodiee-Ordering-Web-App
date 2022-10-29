import { Typography, Grid } from '@mui/material';
import useRestaurantData from '@hooks/data/useRestaurantData';
import ProductDetails from './shared/ProductDetails';

const StoreProductCatalog = () => {
  const { _id: storeId, name, catalog } = useRestaurantData();

  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', my: 1 }}>
        Catalog
      </Typography>
      <Grid container>
        {catalog?.map(({ category, items }) => (
          <Grid item key={category} sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              {category}
            </Typography>
            <Grid item container rowSpacing={1}>
              {items.map((product) => (
                <ProductDetails
                  key={product._id}
                  storeId={storeId}
                  storeName={name}
                  productId={product._id}
                  maxQuantity={product.quantity}
                  {...product}
                />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StoreProductCatalog;
