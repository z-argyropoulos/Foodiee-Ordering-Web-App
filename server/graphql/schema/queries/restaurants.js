const { GraphQLList } = require('graphql');
const RestaurantType = require('../../types/Restaurant');
const { getRestaurants } = require('../../../actions/restaurant');

const items = {
  type: new GraphQLList(RestaurantType),
  description: 'List of all restaurants',
  resolve: () => getRestaurants(),
};

module.exports = items;
