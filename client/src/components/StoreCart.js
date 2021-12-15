import React from 'react';
import { useCart, useStoreCart } from '../hooks/useStoreCart';

const StoreCart = ({ storeId }) => {
  const { products } = useCart(storeId);
  const { carts } = useStoreCart();

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {products &&
          products.map(({ productId, quantity }) => (
            <li key={productId}>
              {productId} / {quantity}
            </li>
          ))}
      </ul>
      <h4>Summary Cart</h4>
      <ul>
        {carts.map(({ storeId, products }) => (
          <li>
            <h5>{storeId}</h5>
            <ul>
              {products.map(({ productId, quantity }) => (
                <li>
                  {productId} / {quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreCart;
