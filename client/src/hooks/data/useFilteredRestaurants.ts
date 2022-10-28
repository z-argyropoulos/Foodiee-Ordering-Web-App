import { getFilteredRestaurantsSWR } from '@services/restaurants';

const useFilteredRestaurants = () => {
  const { data, error } = getFilteredRestaurantsSWR();

  return {
    restaurants: data?.restaurants,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFilteredRestaurants;
