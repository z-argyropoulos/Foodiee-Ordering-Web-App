import axios from 'axios';

const API_STORES = process.env.REACT_APP_SERVER_API + '/stores';

const getStores = () => {
  return axios.get(API_STORES);
};

export { getStores };
