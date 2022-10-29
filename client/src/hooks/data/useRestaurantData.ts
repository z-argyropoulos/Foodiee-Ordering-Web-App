import { useAppSelector } from '@hooks/redux/useAppSelector';
import IRestaurant from '@interfaces/IRestaurant';

const useRestaurantData = () => ({
  ...useAppSelector(
    (state) => state.restaurant.restaurant as IRestaurant
  ),
});
export default useRestaurantData;
