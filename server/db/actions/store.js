const { Store } = require('../models/store');

// Add store to DB
const addStore = async (storeData) => {
  const store = new Store(storeData);
  return store.save();
};

module.exports = { addStore };
