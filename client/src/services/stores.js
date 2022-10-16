import axios from 'axios';

const API_STORES = process.env.REACT_APP_SERVER_API + 'restaurants';

const getStores = () => {
  return axios.get(API_STORES);
};

const getStore = (restaurantId) => {
  return axios.get(`${API_STORES}/byIdLegacy`, {
    params: {
      restaurantId,
    },
  });
};
export { getStores, getStore };
