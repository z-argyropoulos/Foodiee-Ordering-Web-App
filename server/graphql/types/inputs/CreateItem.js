const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const { GraphQLObjectID } = require('graphql-scalars');

const CreateItem = new GraphQLInputObjectType({
  name: 'NewItem',
  description: 'Payload fields to create item',
  fields: () => ({
    restaurantId: { type: GraphQLObjectID },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    quantity: { type: new GraphQLNonNull(GraphQLInt) },
    category: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = CreateItem;
