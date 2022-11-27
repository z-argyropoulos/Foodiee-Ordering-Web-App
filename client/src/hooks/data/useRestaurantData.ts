import { useAppSelector } from '@hooks/redux/useAppSelector';
import IRestaurant from '@interfaces/IRestaurant';

const useRestaurantData = () => ({
  ...useAppSelector((state) => state?.restaurant?.restaurant),
});
export default useRestaurantData;
