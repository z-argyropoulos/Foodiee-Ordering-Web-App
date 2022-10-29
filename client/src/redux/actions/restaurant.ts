import { AppDispatch } from '@redux/store';
import { getStore } from '@services/restaurants';
import { restaurantSlice } from '@redux/slices/restaurant';

// Extra async/thunk reducers
export const fetchRestaurantById = (restaurantId: string) => {
  return async (dispatch: AppDispatch) => {
    const response = await getStore(restaurantId);
    const { restaurant } = response.data;

    return dispatch(
      restaurantSlice.actions.setRestaurant(restaurant)
    );
  };
};

// Slice reducers
export const { setRestaurant, clearRestaurant } =
  restaurantSlice.actions;
