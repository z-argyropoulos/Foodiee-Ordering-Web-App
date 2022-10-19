const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType,
} = require('graphql');

const CreateAddressInputType = new GraphQLInputObjectType({
  name: 'CreateAddress',
  description: 'Restaurant address payload',
  fields: () => ({
    street: { type: new GraphQLNonNull(GraphQLString) },
    region: { type: new GraphQLNonNull(GraphQLString) },
    postal_code: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = CreateAddressInputType;
