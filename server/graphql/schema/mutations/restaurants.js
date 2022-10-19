const { GraphQLNonNull } = require('graphql');
const RestaurantType = require('../../types/Restaurant');
const RestaurantCategoryType = require('../../types/RestaurantCategory');
const CreateRestaurantInputType = require('../../types/inputs/CreateRestaurant');
const CreateRestaurantCategoryInputType = require('../../types/inputs/CreateRestaurantCategory');
const { addRestaurant } = require('../../../actions/restaurant');
const {
  addRestaurantCategory,
} = require('../../../actions/restaurant/category');

const createRestaurant = {
  type: RestaurantType,
  description: 'Create a new restaurant',
  args: {
    input: {
      type: new GraphQLNonNull(CreateRestaurantInputType),
    },
  },
  resolve: (_, { input }) => addRestaurant(input),
};

const createRestaurantCategory = {
  type: RestaurantCategoryType,
  description: 'Create a restaurant category',
  args: {
    input: {
      type: new GraphQLNonNull(CreateRestaurantCategoryInputType),
    },
  },
  resolve: (_, { input }) => addRestaurantCategory(input),
};

module.exports = { createRestaurant, createRestaurantCategory };
