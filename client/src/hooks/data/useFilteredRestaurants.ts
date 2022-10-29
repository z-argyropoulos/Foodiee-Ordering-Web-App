import { useFilteredRestaurantsSWR } from '@services/restaurants';

const useFilteredRestaurants = () => {
  const { data, error } = useFilteredRestaurantsSWR();

  return {
    restaurants: data?.restaurants,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFilteredRestaurants;
