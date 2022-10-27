import { HYDRATE } from 'next-redux-wrapper';
import type { PayloadAction } from '@reduxjs/toolkit';

// Hydrate/merge the client store with the server 'state/store'
const hydrationReducer = (sliceName: string) => {
  return {
    [HYDRATE]: (state: any, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload[sliceName],
      };
    },
  };
};

export default hydrationReducer;
