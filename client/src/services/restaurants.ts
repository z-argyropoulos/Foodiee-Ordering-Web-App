import axios from 'axios';
import IRestaurant from '../interfaces/IRestaurant';
import { SWRAxiosFetcher } from '@utils/swr';
import useSWR from 'swr';

const baseURL = process.env.NEXT_PUBLIC_SERVER_API + '/restaurants';
const restaurantsInstance = axios.create({
  baseURL,
});

// SWR (with axios fetcher function)
const restaurantSWRFetcher = SWRAxiosFetcher(restaurantsInstance);

const getStores = () => {
  return restaurantsInstance.get<{ restaurants: IRestaurant[] }>('/');
};

const getRestaurantsPaths = () => {
  return restaurantsInstance.get<{
    paths: { params: { id: string }[] };
  }>('/paths');
};

const useFilteredRestaurantsSWR = () => {
  return useSWR<{ restaurants: IRestaurant[] }>(
    baseURL,
    restaurantSWRFetcher
  );
};

const getStore = (restaurantId: string) => {
  return restaurantsInstance.get<{ restaurant: IRestaurant }>(
    '/byIdLegacy',
    {
      params: {
        restaurantId,
      },
    }
  );
};

export {
  getStores,
  getRestaurantsPaths,
  useFilteredRestaurantsSWR,
  getStore,
};
