import React from 'react';
import { useStoreCart, useStoresCart } from '../hooks/useStoresCart';

const StoreCart = ({ storeId }) => {
  const { products } = useStoreCart(storeId);
  const { carts } = useStoresCart();

  return (
    <div>
      <h3>This Store Cart</h3>
      <ul>
        {products &&
          products.map(({ productId, quantity }) => (
            <li key={productId}>
              {productId} / {quantity}
            </li>
          ))}
      </ul>
      <h4>Overall Cart</h4>
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
