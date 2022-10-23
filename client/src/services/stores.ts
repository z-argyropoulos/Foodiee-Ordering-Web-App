import axios from 'axios';
import IRestaurant from '../interfaces/IRestaurant';

const storesInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API + '/restaurants',
});

const getStores = () => {
  return storesInstance.get<{ restaurants: IRestaurant[] }>('/');
};

const getStore = (restaurantId: string) => {
  return storesInstance.get<{ restaurant: IRestaurant }>('/byIdLegacy', {
    params: {
      restaurantId,
    },
  });
};
export { getStores, getStore };
