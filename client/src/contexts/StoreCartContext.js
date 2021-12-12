import { createContext, useReducer } from 'react';

// Initial State
const initialState = [];

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { storeId, productId } = action.payload;
      // find store and product
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

  return (
    <StoreCartContext.Provider
      value={{
        carts: [...state],
        addToCart,
      }}>
      {children}
    </StoreCartContext.Provider>
  );
};

export { StoreCartContext, StoreCartProvider };
