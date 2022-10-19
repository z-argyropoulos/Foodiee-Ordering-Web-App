const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');
const CreateAddressInputType = require('../../types/inputs/CreateAddress');

const CreateRestaurant = new GraphQLInputObjectType({
  name: 'CreateRestaurant',
  description: 'Payload fields to create restaurant',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    address: { type: new GraphQLNonNull(CreateAddressInputType) },
    categories: { type: new GraphQLList(GraphQLString) },
    rating: { type: GraphQLFloat },
    deliveryTimeRange: { type: new GraphQLList(GraphQLInt) },
    minOrder: { type: GraphQLString },
    isOpen: { type: GraphQLBoolean },
  }),
});

module.exports = CreateRestaurant;
