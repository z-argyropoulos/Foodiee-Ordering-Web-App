import axios from 'axios';

const API_STORES = process.env.REACT_APP_SERVER_API + 'stores';

const getStores = () => {
  return axios.get(API_STORES);
};

const getStore = (storeId) => {
  return axios.get(`${API_STORES}/byId`, {
    params: {
      storeId,
    },
  });
};
export { getStores, getStore };
