const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
} = require('graphql');
const { GraphQLObjectID } = require('graphql-scalars');

const ItemType = new GraphQLObjectType({
  name: 'Item',
  description: 'Restaurant item included in the catalog',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLObjectID) },
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

module.exports = ItemType;
