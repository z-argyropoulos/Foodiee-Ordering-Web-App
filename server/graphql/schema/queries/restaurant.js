const { GraphQLObjectID } = require('graphql-scalars');
const RestaurantType = require('../../types/Restaurant');
const {
  getRestaurantDetails,
} = require('../../../actions/restaurant');

const restaurant = {
  type: RestaurantType,
  description: 'Individual restaurant',
  args: {
    id: { type: GraphQLObjectID },
  },
  resolve: (_, args) => getRestaurantDetails(args.id),
};

module.exports = restaurant;
