import axios from 'axios';
import IRestaurant from '../interfaces/IRestaurant';
import { SWRAxiosFetcher } from '@utils/swr';
import useSWR from 'swr';

const baseURL = process.env.NEXT_PUBLIC_SERVER_API + '/restaurants';
const storesInstance = axios.create({
  baseURL,
});

// SWR (with axios fetcher function)
const restaurantSWRFetcher = SWRAxiosFetcher(storesInstance);

const getStores = () => {
  return storesInstance.get<{ restaurants: IRestaurant[] }>('/');
};

const getFilteredRestaurantsSWR = () => {
  return useSWR<{ restaurants: IRestaurant[] }>(
    baseURL,
    restaurantSWRFetcher
  );
};

const getStore = (restaurantId: string) => {
  return storesInstance.get<{ restaurant: IRestaurant }>(
    '/byIdLegacy',
    {
      params: {
        restaurantId,
      },
    }
  );
};
export { getStores, getFilteredRestaurantsSWR, getStore };
