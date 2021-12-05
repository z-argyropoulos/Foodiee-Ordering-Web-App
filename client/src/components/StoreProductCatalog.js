import { Card, Typography, Grid } from '@mui/material';

const StoreProductCatalog = ({ catalog }) => {
  return (
    <Card>
      <Typography variant="h4">Catalog</Typography>
      <Grid container>
        {catalog.map(({ category, products }) => (
          <Grid item key={category}>
            <Typography variant="h5">{category}</Typography>
            <Grid container>
              {products.map(
                ({ _id, title, description, price, quantity }) => (
                  <Grid item key={_id}>
                    {title}
                    {description}
                    {price}
                    {quantity}
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default StoreProductCatalog;
