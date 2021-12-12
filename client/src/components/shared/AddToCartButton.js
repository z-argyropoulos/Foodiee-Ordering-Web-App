import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import useStoreCart from '../../hooks/useStoreCart';

const AddToCartButton = ({ storeId, productId, maxQuantity }) => {
  const [openQuantitySelector, setOpenQuantitySelector] =
    useState(false);
  const [quantity, setQuantity] = useState(1);
  const [excessQuantity, setExcessQuantity] = useState(false);

  const { addToCart, removeFromCart } = useStoreCart();

  useEffect(() => {
    // reset button on 0 quantity selected
    if (!quantity) {
      removeFromCart(storeId, productId);
      setOpenQuantitySelector(false);
      setQuantity(1);
    }
    // disable increment button on max quantity (and reset)
    setExcessQuantity(Boolean(quantity >= maxQuantity));
  }, [quantity, maxQuantity, storeId, productId, removeFromCart]);

  // Quantity Counter
  const handleDecrement = () => {
    setQuantity((prev) => (prev ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleReset = () => {
    removeFromCart(storeId, productId);
    setOpenQuantitySelector(false);
    setQuantity(1);
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
        addToCart(storeId, productId);
        setOpenQuantitySelector(true);
      }}>
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
