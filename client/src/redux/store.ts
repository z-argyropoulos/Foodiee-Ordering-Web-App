import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import restaurantsReducer from '@redux/slices/restaurants';
import restaurantReducer from '@redux/slices/restaurant';
import cartReducer from '@redux/slices/cart';
import { createWrapper } from 'next-redux-wrapper';

// Redux store
const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
  },
});

// Make fucntion for next-redux-wrapper
const makeStore = () => store;

// Redux
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Redux-Next-Wrapper
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
