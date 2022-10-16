const { model } = require('mongoose');

const RestaurantSchema = require('./restaurant');
const RestaurantCategorySchema = require('./category');

const Restaurant = model('restaurant', RestaurantSchema);
const RestaurantCategory = model(
  'restaurant_category',
  RestaurantCategorySchema
);

module.exports = { Restaurant, RestaurantCategory };
