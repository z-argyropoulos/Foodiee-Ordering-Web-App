import { AppDispatch } from '@redux/store';
import { getStores } from '@services/stores';
import { restaurantsSlice } from '@redux/slices/restaurants';

// Extra async/thunk reducers
export const fetchAllRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    const response = await getStores();
    const { restaurants } = response.data;

    return dispatch(
      restaurantsSlice.actions.setRestaurants(restaurants)
    );
  };
};

// Slice reducers
export const { setRestaurants } = restaurantsSlice.actions;
