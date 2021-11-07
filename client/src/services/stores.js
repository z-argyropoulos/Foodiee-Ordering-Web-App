import axios from 'axios';

const API = process.env.REACT_APP_SERVER_API + '/store';

const getStores = () => {
  console.log(`${API}/stores`);
  return axios.get(`${API}/stores`);
};

export { getStores };
