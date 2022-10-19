const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');
const { GraphQLObjectID } = require('graphql-scalars');

const RestaurantCategoryType = new GraphQLObjectType({
  name: 'RestaurantCategory',
  description: 'Restaurant category',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLObjectID) },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
  }),
});

module.exports = RestaurantCategoryType;
