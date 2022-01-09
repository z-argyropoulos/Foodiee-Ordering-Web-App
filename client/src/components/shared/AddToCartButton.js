import React, { useEffect, useState, useMemo } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useStoresCart } from '../../hooks/useStoresCart';
import { useStoreData } from '../../hooks/useStoreData';

const AddToCartButton = ({ store, product }) => {
  const { _id: storeId } = useStoreData();
  const { productId, maxQuantity } = product;
  const { carts, addToCart, removeFromCart, updateCart } =
    useStoresCart();

  const [openQuantitySelector, setOpenQuantitySelector] =
    useState(false);
  const [excessQuantity, setExcessQuantity] = useState(false);

  // get product quantity from store (if it exists)
  const quantity = useMemo(() => {
    return carts
      .find((store) => store.storeId === storeId)
      ?.products.find(
        (cartProduct) => cartProduct.productId === productId
      )?.quantity;
  }, [carts, productId, storeId]);

  useEffect(() => {
    // reset button on 0 quantity selected
    if (quantity === 0) {
      removeFromCart(store, product);
      setOpenQuantitySelector(false);
    }
    // disable increment button on max quantity (and reset)
    setExcessQuantity(Boolean(quantity >= maxQuantity));
  }, [quantity, maxQuantity, store, product, removeFromCart]);

  // Quantity Counter
  const handleDecrement = () => {
    updateCart(store, product, quantity - 1);
  };

  const handleIncrement = () => {
    updateCart(store, product, quantity + 1);
  };

  const handleReset = () => {
    removeFromCart(store, product);
    setOpenQuantitySelector(false);
  };

  if (openQuantitySelector)
    return (
      <div>
        <ButtonGroup variant="contained" color="secondary">
          <Button onClick={handleDecrement}>-</Button>
          <Button onClick={handleReset}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {quantity}
            </span>
          </Button>
          <Button disabled={excessQuantity} onClick={handleIncrement}>
            +
          </Button>
        </ButtonGroup>
      </div>
    );

  return (
    <Button
      variant="outlined"
      sx={{ borderColor: 'yellow', color: 'white' }}
      onClick={() => {
        addToCart(store, product);
        setOpenQuantitySelector(true);
      }}>
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
