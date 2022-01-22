import React from 'react';
import { useUser } from '../hooks/useUser';
import { useStoresCart } from '../hooks/useStoresCart';
import { Stack, Typography, Box, Grid } from '@mui/material';
import { roundNumber } from '../functions/roundNumber';

import ProductDetails from '../components/shared/ProductDetails';

const Checkout = () => {
  const { address } = useUser();
  const { carts } = useStoresCart();

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

  return (
    <Stack sx={{ mt: '75px', mx: 2 }}>
      <Grid container>
        <Grid item md={8}>
          {carts.length > 0 ? (
            <>
              {carts.map((store) => (
                <Box key={store.storeId} sx={{ my: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    {store.storeName}
                  </Typography>
                  {store.products.map((product) => (
                    <Box key={product.productId} sx={{ my: 1 }}>
                      <ProductDetails
                        storeId={store.storeId}
                        storeName={store.storeName}
                        productId={product.productId}
                        {...product}
                      />
                    </Box>
                  ))}
                </Box>
              ))}
            </>
          ) : (
            <Box
              sx={{
                textAlign: 'center',
                my: '100px',
              }}>
              <Typography variant="body">
                Your cart is empty.
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Box sx={{ my: 2 }}>
                {address ? (
                  <Typography variant="h5">
                    Delivering to: {address}
                  </Typography>
                ) : (
                  <>
                    <Typography variant="body">
                      Enter your address to continue with the
                      delivery.
                    </Typography>
                  </>
                )}
              </Box>
              {carts.length > 0 && (
                <Typography variant="h6">
                  Total: {roundNumber(calculateTotalPrice(carts))} €
                </Typography>
              )}
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Checkout;