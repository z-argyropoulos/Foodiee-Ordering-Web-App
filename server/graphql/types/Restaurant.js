const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');
const { GraphQLObjectID } = require('graphql-scalars');
const ItemType = require('./Item');
const AddressType = require('./Address');
const {
  getItemsByRestaurantId,
} = require('../../actions/item/index');

const RestaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  description: 'Restaurant',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLObjectID) },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    address: { type: new GraphQLNonNull(AddressType) },
    categories: { type: new GraphQLList(GraphQLString) },
    rating: { type: GraphQLFloat },
    deliveryTimeRange: { type: new GraphQLList(GraphQLInt) },
    minOrder: { type: GraphQLString },
    isOpen: { type: GraphQLBoolean },
    catalog: {
      type: new GraphQLList(ItemType),
      description: 'Restaurant catalog (list of restaurant items)',
      args: {
        id: { type: GraphQLObjectID },
      },
      resolve: (obj, args) =>
        getItemsByRestaurantId(obj._id || args.id),
    },
  }),
});

module.exports = RestaurantType;
