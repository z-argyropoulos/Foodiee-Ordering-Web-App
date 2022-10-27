import type { RestaurantsState } from '@redux/slices/restaurants';
import type { PayloadAction } from '@reduxjs/toolkit';
import type IRestaurant from '@interfaces/IRestaurant';

const restaurantsReducers = {
  // Use the PayloadAction type to declare the contents of `action.payload`
  setRestaurants: (
    state: RestaurantsState,
    action: PayloadAction<IRestaurant[]>
  ) => {
    state.restaurants = action.payload;
  },
  clearRestaurants: (state: RestaurantsState) => {
    state.restaurants = [];
  },
};

export default restaurantsReducers;
