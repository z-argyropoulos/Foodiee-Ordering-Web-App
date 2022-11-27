import { createSlice } from '@reduxjs/toolkit';
import clientStoreHydration from '@redux/reducers/clientStoreHydration';
import cartReducers from '@redux/reducers/cart';
import type ICart from '@interfaces/ICart';

// Define a type for the slice state
export interface CartState {
  cart: ICart | {};
}

// Define the initial state using that type
const initialState: CartState = {
  cart: {},
};

const sliceName = 'cart';

export const cartSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: cartReducers,
  extraReducers: {
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    ...clientStoreHydration(sliceName),
  },
});

export default cartSlice.reducer;
