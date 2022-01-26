import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { useStoreCart, useStoresCart } from '../hooks/useStoresCart';
import { PATH_PAGE } from '../routes/paths';
import { Link } from 'react-router-dom';
import {
  storesSumPrice,
  storeSumPrice,
  productSumPrice,
} from '../helpers/sums';

const StoreCart = ({ storeId }) => {
  const { products } = useStoreCart(storeId);
  const { carts } = useStoresCart();

  return (
    <div>
      <h3>This store's Cart</h3>
      <Grid container direction="column">
        {products ? (
          <>
            {products &&
              products.map(
                ({ productId, title, price, quantity }) => (
                  <Grid item key={productId} sx={{ mb: 2 }}>
                    <div>
                      {title} (x {quantity})
                    </div>
                    <div style={{ fontWeight: 'bold' }}>
                      {productSumPrice(price, quantity)} €
                    </div>
                  </Grid>
                )
              )}
            <Typography variant="body">
              Total: {storeSumPrice(products)} €
            </Typography>
          </>
        ) : (
          <></>
        )}
      </Grid>
      <h3>Overall Cart</h3>
      <Grid container columnGap={5} sx={{ mb: 2 }}>
        {carts.map(({ storeId, name, products }) => (
          <Grid item key={storeId}>
            <h5>{name}</h5>
            <Grid container direction="column">
              {products &&
                products.map(
                  ({ productId, title, price, quantity }) => (
                    <Grid item key={productId} sx={{ mb: 2 }}>
                      <div>
                        {title} (x {quantity})
                      </div>
                      <div
                        style={{
                          fontWeight: 'bold',
                          paddingTop: '0.5rem',
                        }}>
                        {productSumPrice(price, quantity)} €
                      </div>
                    </Grid>
                  )
                )}
            </Grid>
          </Grid>
        ))}
      </Grid>
      {carts.length !== 0 && (
        <>
          <div>Total Order: {storesSumPrice(carts)} €</div>
          <Button
            variant="contained"
            color="secondary"
            sx={{ my: 2 }}>
            <Link to={`/${PATH_PAGE.checkout}`}>Checkout</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default StoreCart;
