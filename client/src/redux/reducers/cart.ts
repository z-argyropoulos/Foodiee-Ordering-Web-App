import type { CartState } from '@redux/slices/cart';
import type { PayloadAction } from '@reduxjs/toolkit';
import type ICart from '@interfaces/ICart';

const cartReducers = {
  // Use the PayloadAction type to declare the contents of `action.payload`
  /* setCart: (state: CartState, action: PayloadAction<ICart>) => {
    state.cart = action.payload;
  }, */
  addStoreToCart: (
    state: CartState,
    action: PayloadAction<{ storeId: string; storeName: string }>
  ) => {
    const { storeId, storeName } = action.payload;
    const delta = { [storeId]: { name: storeName, items: [] } };
    state.cart = { ...state.cart, ...delta };
  },
  removeStoreFromCart: (
    state: CartState,
    action: PayloadAction<{ storeId: string }>
  ) => {
    const { storeId } = action.payload;
    delete state.cart[storeId];
  },
  // addItemToCart:
  // updateItemInCart
  // removeItemFromCart
  // clearCart: (state: CartState) => {
  //   state.cart = {};
  // },
};

export default cartReducers;
