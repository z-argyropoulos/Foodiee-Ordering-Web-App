import { createContext, useReducer } from 'react';

// Carts Schema
/* const carts = [
  {
    storeId,
    ...other store data,
    products: [{ productId, ...other product data, quantity }],
  },
]; */

// Initial State
const initialState = [];

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { store, product } = action.payload;
      const { storeId } = store;

      // get store
      const storeIndex = state.findIndex(
        (store) => store.storeId === storeId
      );

      if (storeIndex > -1) {
        const newStateArr = [...state];
        newStateArr.splice(storeIndex, 1, {
          ...store,
          products: [
            ...state[storeIndex].products,
            { ...product, quantity: 1 },
          ],
        });
        return newStateArr;
      } else {
        return [
          ...state,
          {
            ...store,
            products: [
              {
                ...product,
                quantity: 1,
              },
            ],
          },
        ];
      }
    }
    case 'REMOVE_FROM_CART': {
      const { store, product } = action.payload;
      const { storeId } = store;
      const { productId } = product;

      // get store
      const storeIndex = state.findIndex(
        (store) => store.storeId === storeId
      );

      const newStateArr = [...state];

      // if product is the last item from this store, remove store
      if (state[storeIndex].products.length === 1) {
        newStateArr.splice(storeIndex, 1);
        return newStateArr;
      }

      const newProductsArr = state[storeIndex].products.filter(
        (product) => product.productId !== productId
      );

      newStateArr.splice(storeIndex, 1, {
        ...store,
        products: newProductsArr,
      });

      return newStateArr;
    }
    case 'UPDATE_CART': {
      const { store, product, quantity } = action.payload;
      const { storeId } = store;
      const { productId } = product;

      // get store
      const storeIndex = state.findIndex(
        (store) => store.storeId === storeId
      );

      // get product
      const productIndex = state[storeIndex].products.findIndex(
        (product) => product.productId === productId
      );

      const newStateArr = [...state];
      newStateArr[storeIndex].products[productIndex].quantity =
        quantity;

      return newStateArr;
    }
    default:
      return state;
  }
};

// Create Context
const StoresCartContext = createContext();

const StoreCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (store, product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { store, product },
    });
  };

  const removeFromCart = (store, product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { store, product },
    });
  };

  const updateCart = (store, product, quantity) => {
    dispatch({
      type: 'UPDATE_CART',
      payload: { store, product, quantity },
    });
  };

  return (
    <StoresCartContext.Provider
      value={{
        carts: [...state],
        addToCart,
        removeFromCart,
        updateCart,
      }}>
      {children}
    </StoresCartContext.Provider>
  );
};

export { StoresCartContext, StoreCartProvider };
