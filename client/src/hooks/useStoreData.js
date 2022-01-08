import { StoreDataContext } from '../contexts/StoreDataContext';
import { useContext } from 'react';

export const useStoreData = () => useContext(StoreDataContext);
