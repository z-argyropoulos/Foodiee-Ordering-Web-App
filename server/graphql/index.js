const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const graphql = graphqlHTTP({
  graphiql: true,
  schema,
});

module.exports = graphql;
