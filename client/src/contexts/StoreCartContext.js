import { createContext, useReducer } from 'react';

// Initial State
const initialState = [];

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { storeId, productId } = action.payload;

      // get store
      const storeIndex = state.findIndex(
        (store) => store.storeId === storeId
      );

      if (storeIndex > -1) {
        const newStateArr = [...state];
        newStateArr.splice(storeIndex, 1, {
          storeId,
          products: [
            ...state[storeIndex].products,
            { productId, quantity: 1 },
          ],
        });
        return newStateArr;
      } else {
        return [
          ...state,
          {
            storeId,
            products: [
              {
                productId,
                quantity: 1,
              },
            ],
          },
        ];
      }
    }
    case 'REMOVE_FROM_CART': {
      const { storeId, productId } = action.payload;

      // get store
      const storeIndex = state.findIndex(
        (store) => store.storeId === storeId
      );

      return state[storeIndex].products.filter(
        (product) => product.productId !== productId
      );
    }
    case 'UPDATE_CART': {
      const { storeId, productId, quantity } = action.payload;

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
const StoreCartContext = createContext();

const StoreCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (storeId, productId, quantity) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { storeId, productId, quantity },
    });
  };

  const removeFromCart = (storeId, productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { storeId, productId },
    });
  };

  const updateCart = (storeId, productId, quantity) => {
    dispatch({
      type: 'UPDATE_CART',
      payload: { storeId, productId, quantity },
    });
  };

  return (
    <StoreCartContext.Provider
      value={{
        carts: [...state],
        addToCart,
        removeFromCart,
        updateCart,
      }}>
      {children}
    </StoreCartContext.Provider>
  );
};

export { StoreCartContext, StoreCartProvider };
