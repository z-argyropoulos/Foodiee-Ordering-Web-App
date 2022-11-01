import axios from 'axios';
import IRestaurant from '../interfaces/IRestaurant';
import { SWRAxiosFetcher } from '@utils/swr';
import useSWR from 'swr';
import { NEXT_PUBLIC_CUSTOM_FOODIEE_REST_API } from '@customEnvs';

// AXIOS
const baseURL = NEXT_PUBLIC_CUSTOM_FOODIEE_REST_API + '/restaurants';
const restaurantsInstance = axios.create({
  baseURL,
});

// SWR
const restaurantSWRFetcher = SWRAxiosFetcher(restaurantsInstance);

const useFilteredRestaurantsSWR = () => {
  return useSWR<{ restaurants: IRestaurant[] }>(
    baseURL,
    restaurantSWRFetcher
  );
};

// REST
const getStores = () => {
  return restaurantsInstance.get<{ restaurants: IRestaurant[] }>('/');
};

const getRestaurantsPaths = () => {
  return restaurantsInstance.get<{
    paths: { params: { id: string }[] };
  }>('/paths');
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
