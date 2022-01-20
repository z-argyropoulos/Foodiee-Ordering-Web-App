import { Grid, Card, Typography } from '@mui/material';
import AddToCartButton from './AddToCartButton';

const ProductDetails = ({
  storeId,
  storeName,
  productId,
  title,
  description,
  price,
  maxQuantity,
}) => {
  return (
    <Grid item key={productId} sm={12}>
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
              src={`${process.env.PUBLIC_URL}/img/restaurants/products/${productId}.jpg`}
              alt={title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="column"
              sx={{ px: 3, my: 1, py: 2 }}>
              <Typography variant="h6">{title}</Typography>
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
              store={{ storeId, storeName }}
              product={{
                productId,
                title,
                price,
                maxQuantity,
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
