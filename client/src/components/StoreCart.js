import React from 'react';
import { useCart } from '../hooks/useStoreCart';

const StoreCart = ({ storeId }) => {
  const { products } = useCart(storeId);

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {products &&
          products.map((product) => (
            <li>
              {product.productId} / {product.quantity}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StoreCart;
