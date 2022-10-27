import { createSlice } from '@reduxjs/toolkit';
import type IRestaurant from '@interfaces/IRestaurant';
import clientStoreHydration from '@redux/reducers/clientStoreHydration';
import restaurantsReducers from '@redux/reducers/restaurants';

// Define a type for the slice state
export interface RestaurantsState {
  restaurants: IRestaurant[];
}

// Define the initial state using that type
const initialState: RestaurantsState = {
  restaurants: [],
};

const sliceName = 'restaurants';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: restaurantsReducers,
  extraReducers: {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    ...clientStoreHydration(sliceName),
  },
});

export default restaurantsSlice.reducer;
