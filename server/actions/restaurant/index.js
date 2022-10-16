const { Restaurant } = require('../../models/restaurant');

// Add restaurant to DB
const addRestaurant = async (restaurantData) => {
  const restaurant = new Restaurant(restaurantData);
  return restaurant.save();
};

// Return all restaurants
const getRestaurants = async () => {
  return Restaurant.find({}, { __v: 0 }).exec();
};

// Return restaurant
const getRestaurantDetails = async (restaurantId) => {
  return Restaurant.findOne({ _id: restaurantId }, { __v: 0 }).exec();
};

module.exports = {
  addRestaurant,
  getRestaurants,
  getRestaurantDetails,
};
