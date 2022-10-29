import { Grid, Card, Typography } from '@mui/material';
import AddToCartButton from './AddToCartButton';
import CloudinaryImage from './CloudinaryImage';
import type IItem from '@interfaces/IItem';

export interface IProductDetailsProps extends Partial<IItem> {
  maxQuantity: number;
  size?: string;
  storeId?: string;
  storeName?: string;
  productId: string;
}

const ProductDetails = ({
  storeId,
  storeName,
  productId,
  title,
  description,
  price,
  maxQuantity,
  size,
}: IProductDetailsProps) => {
  return (
    <Grid item key={productId} sm={12}>
      <Card
        sx={{
          borderRadius: 2,
          maxWidth: '1100px',
        }}>
        <Grid container>
          <Grid item xs={size === 'sm' ? 6 : 12} sm={4}>
            <CloudinaryImage
              publicId={`product/${productId}`}
              size={size}
              styles={{
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="space-between"
            xs={size === 'sm' ? 6 : 12}
            sm={8}>
            <Grid item>
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
        </Grid>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
