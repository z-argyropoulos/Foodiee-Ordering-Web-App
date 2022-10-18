const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const RestaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  description: 'Restaurant',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    categories: { type: new GraphQLList(GraphQLString) },
    rating: { type: GraphQLFloat },
    deliveryTimeRange: { type: new GraphQLList(GraphQLInt) },
    minOrder: { type: GraphQLString },
    isOpen: { type: GraphQLBoolean },
  }),
});

module.exports = RestaurantType;
