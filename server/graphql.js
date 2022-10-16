const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const rootGraphQL = {
  schema: buildSchema(`type Query {
    hello: String
  }`),
  resolver: { hello: () => 'Hello from GraphQL' },
};

const graphql = graphqlHTTP({
  schema: rootGraphQL.schema,
  rootValue: rootGraphQL.resolver,
  graphiql: true,
});

module.exports = graphql;
