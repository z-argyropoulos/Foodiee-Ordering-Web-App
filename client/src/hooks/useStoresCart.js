import { StoresCartContext } from '../contexts/StoresCartContext';
import { useContext } from 'react';

export const useStoresCart = () => useContext(StoresCartContext);

export const useStoreCart = (storeId) => {
  // get carts of all stores
  const { carts } = useStoresCart();
  // return this store's cart
  return carts.find((store) => store.storeId === storeId) ?? [];
};
