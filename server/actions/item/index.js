const { Item } = require('../../models/item');

const addItem = async (itemData) => {
  const item = new Item(itemData);
  return item.save();
};

const getItemsByRestaurantId = async (restaurantId) => {
  return Item.find({ restaurantId });
};

module.exports = { addItem, getItemsByRestaurantId };
