import { AppDispatch } from '@redux/store';
import { getStores } from '@services/restaurants';
import { getAllRestaurantsQuery } from '@graphql/queries';
import { restaurantsSlice } from '@redux/slices/restaurants';

// Extra async/thunk reducers
// REST
export const fetchAllRestaurants = () => {
  return async (dispatch: AppDispatch) => {
    const response = await getStores();
    const { restaurants } = response.data;

    return dispatch(
      restaurantsSlice.actions.setRestaurants(restaurants)
    );
  };
};

// GRAPHQL
export const queryAllRestaurantsGQL = () => {
  return async (dispatch: AppDispatch) => {
    const {
      data: { restaurants },
    } = await getAllRestaurantsQuery();

    return dispatch(
      restaurantsSlice.actions.setRestaurants(restaurants)
    );
  };
};

// Slice reducers
export const { setRestaurants } = restaurantsSlice.actions;
