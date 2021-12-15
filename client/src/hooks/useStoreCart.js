import { StoreCartContext } from '../contexts/StoreCartContext';
import { useContext } from 'react';

export const useStoreCart = () => useContext(StoreCartContext);

export const useCart = (storeId) => {
  // get carts of all stores
  const { carts } = useStoreCart();
  // return this store's cart
  return carts.find((store) => store.storeId === storeId) ?? [];
};
