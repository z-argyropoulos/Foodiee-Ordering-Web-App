const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const CreateRestaurantCategory = new GraphQLInputObjectType({
  name: 'CreateRestaurantCategory',
  description: 'Payload fields to create restaurant category',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
  }),
});

module.exports = CreateRestaurantCategory;
