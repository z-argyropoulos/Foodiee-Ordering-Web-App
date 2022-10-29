import { createSlice } from '@reduxjs/toolkit';
import type IRestaurant from '@interfaces/IRestaurant';
import clientStoreHydration from '@redux/reducers/clientStoreHydration';
import restaurantReducers from '@redux/reducers/restaurant';

// Define a type for the slice state
export interface RestaurantState {
  restaurant: IRestaurant | null;
}

// Define the initial state using that type
const initialState: RestaurantState = {
  restaurant: null,
};

const sliceName = 'restaurant';

export const restaurantSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: restaurantReducers,
  extraReducers: {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    ...clientStoreHydration(sliceName),
  },
});

export default restaurantSlice.reducer;
