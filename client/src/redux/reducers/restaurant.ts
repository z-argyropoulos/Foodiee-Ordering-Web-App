import type { RestaurantState } from '@redux/slices/restaurant';
import type { PayloadAction } from '@reduxjs/toolkit';
import type IRestaurant from '@interfaces/IRestaurant';

const restaurantsReducers = {
  // Use the PayloadAction type to declare the contents of `action.payload`
  setRestaurant: (
    state: RestaurantState,
    action: PayloadAction<IRestaurant>
  ) => {
    state.restaurant = action.payload;
  },
  clearRestaurant: (state: RestaurantState) => {
    state.restaurant = null;
  },
};

export default restaurantsReducers;
