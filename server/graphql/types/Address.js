const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} = require('graphql');
const { GraphQLObjectID } = require('graphql-scalars');

const AddressType = new GraphQLObjectType({
  name: 'Address',
  description: 'Restaurant address',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLObjectID) },
    street: { type: new GraphQLNonNull(GraphQLString) },
    region: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = AddressType;
