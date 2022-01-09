import React from 'react';
import { Grid, Button } from '@mui/material';
import { useStoreCart, useStoresCart } from '../hooks/useStoresCart';
import { roundNumber } from '../functions/roundNumber';

const calculateTotalPrice = (carts) => {
  return carts.reduce((prevValue, curStore) => {
    return (
      prevValue +
      curStore.products.reduce((prevValue, curProduct) => {
        return prevValue + curProduct.price * curProduct.quantity;
      }, 0)
    );
  }, 0);
};

const StoreCart = ({ storeId }) => {
  const { products } = useStoreCart(storeId);
  const { carts } = useStoresCart();

  return (
    <div>
      <h3>This store's Cart</h3>
      <Grid container direction="column">
        {products &&
          products.map(({ productId, title, price, quantity }) => (
            <Grid item key={productId} sx={{ mb: 2 }}>
              <div>
                {title} (x {quantity})
              </div>
              <div style={{ fontWeight: 'bold' }}>
                {roundNumber(quantity * price)} €
              </div>
            </Grid>
          ))}
      </Grid>
      <h3>Overall Cart</h3>
      <Grid container columnGap={5}>
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
                        {roundNumber(quantity * price)} €
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
          <div>
            Total Order: {roundNumber(calculateTotalPrice(carts))}
          </div>
          <Button
            variant="contained"
            color="secondary"
            sx={{ my: 2 }}>
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default StoreCart;
