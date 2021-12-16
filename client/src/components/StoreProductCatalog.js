import { Card, Typography, Grid } from '@mui/material';
import AddToCartButton from './shared/AddToCartButton';

const StoreProductCatalog = ({ storeId, catalog }) => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: 'center', my: 1 }}>
        Catalog
      </Typography>
      <Grid container>
        {catalog.map(({ category, products }) => (
          <Grid item key={category} sx={{ my: 2 }}>
            <Typography variant="h5" sx={{ mb: 4 }}>
              {category}
            </Typography>
            <Grid item container rowSpacing={1}>
              {products.map(
                ({ _id, title, description, price, quantity }) => (
                  <Grid item key={_id} sm={12}>
                    <Card
                      sx={{
                        maxWidth: '1000px',
                        height: { sm: '140px' },
                        borderRadius: 2,
                        cursor: 'pointer',
                      }}>
                      <Grid container>
                        <Grid item xs={12} sm={3}>
                          <img
                            style={{
                              width: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                            src={`${process.env.PUBLIC_URL}/img/restaurants/products/${_id}.jpg`}
                            alt={title}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Grid
                            container
                            direction="column"
                            sx={{ px: 3, my: 1, py: 2 }}>
                            <Typography variant="h6">
                              {title}
                            </Typography>
                            <div>{description}</div>
                            <div
                              style={{
                                marginTop: '1em',
                                color: 'yellow',
                              }}>
                              {price} €
                            </div>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}>
                          <AddToCartButton
                            storeId={storeId}
                            productId={_id}
                            maxQuantity={quantity}
                          />
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StoreProductCatalog;
