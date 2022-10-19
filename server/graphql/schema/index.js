const { GraphQLSchema } = require('graphql');
const mutation = require('./mutation');
const query = require('./query');

const rootSchema = new GraphQLSchema({
  mutation,
  query,
});

module.exports = rootSchema;
