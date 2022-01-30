import {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getStore } from '../services/stores';
import { storeInterface } from '../interfaces/stores';

const StoreDataContext = createContext();

const StoreDataProvider = ({ storeId, setDataFetched, children }) => {
  const [store, setStore] = useState(storeInterface);

  const fetchStore = useCallback(() => {
    getStore(storeId).then(({ data }) => {
      setStore(data.store);
      setDataFetched(true);
    });
  }, [storeId, setDataFetched]);

  useEffect(() => {
    fetchStore();
  }, [fetchStore]);

  return (
    <StoreDataContext.Provider value={{ ...store }}>
      {children}
    </StoreDataContext.Provider>
  );
};

export { StoreDataContext, StoreDataProvider };
