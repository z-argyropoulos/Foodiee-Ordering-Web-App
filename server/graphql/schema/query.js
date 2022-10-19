const { GraphQLObjectType } = require('graphql');
const items = require('./queries/items');
const restaurants = require('./queries/restaurants');
const restaurant = require('./queries/restaurant');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    items,
    restaurants,
    restaurant,
  }),
});

module.exports = query;
