const { RestaurantCategory } = require('../../../models/restaurant');

const addRestaurantCategory = async (categoryData) => {
  const category = new RestaurantCategory(categoryData);
  return category.save();
};

module.exports = { addRestaurantCategory };
