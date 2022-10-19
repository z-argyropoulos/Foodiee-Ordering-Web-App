const { GraphQLObjectType } = require('graphql');
const itemMutations = require('./mutations/items');
const restaurantMutations = require('./mutations/restaurants');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...itemMutations,
    ...restaurantMutations,
  }),
});

module.exports = mutation;
