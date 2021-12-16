import React, { useEffect, useState, useMemo } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useStoresCart } from '../../hooks/useStoresCart';

const AddToCartButton = ({ storeId, productId, maxQuantity }) => {
  const [openQuantitySelector, setOpenQuantitySelector] =
    useState(false);
  const [excessQuantity, setExcessQuantity] = useState(false);

  const { carts, addToCart, removeFromCart, updateCart } =
    useStoresCart();

  // get product quantity from store (if it exists)
  const quantity = useMemo(() => {
    return carts
      .find((store) => store.storeId === storeId)
      ?.products.find((product) => product.productId === productId)
      ?.quantity;
  }, [carts, productId, storeId]);

  useEffect(() => {
    // reset button on 0 quantity selected
    if (quantity === 0) {
      removeFromCart(storeId, productId);
      setOpenQuantitySelector(false);
    }
    // disable increment button on max quantity (and reset)
    setExcessQuantity(Boolean(quantity >= maxQuantity));
  }, [quantity, maxQuantity, storeId, productId, removeFromCart]);

  // Quantity Counter
  const handleDecrement = () => {
    updateCart(storeId, productId, quantity - 1);
    //setQuantity((prev) => (prev ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    updateCart(storeId, productId, quantity + 1);
    //setQuantity((prev) => prev + 1);
  };

  const handleReset = () => {
    removeFromCart(storeId, productId);
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
        addToCart(storeId, productId, 1);
        setOpenQuantitySelector(true);
      }}>
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
