import React from 'react';
import { useStoreCart, useStoresCart } from '../hooks/useStoresCart';

const StoreCart = ({ storeId }) => {
  const { products } = useStoreCart(storeId);
  const { carts } = useStoresCart();

  return (
    <div>
      <h3>This store's Cart</h3>
      <ul>
        {products &&
          products.map(({ productId, quantity }) => (
            <li key={productId}>
              Product Id: {productId} / Quantity: {quantity}
            </li>
          ))}
      </ul>
      <h3>Overall Cart</h3>
      <ul>
        {carts.map(({ storeId, products }) => (
          <li>
            <h5>Store Id: {storeId}</h5>
            <ul>
              {products.map(({ productId, quantity }) => (
                <li>
                  Product Id: {productId} / Quantity: {quantity}
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
