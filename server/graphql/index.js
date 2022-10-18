const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} = require('graphql');
const { getItems } = require('../actions/item');
const {
  getRestaurants,
  getRestaurantDetails,
} = require('../actions/restaurant');
const ItemType = require('./types/Item');
const RestaurantType = require('./types/Restaurant');
const { GraphQLObjectID } = require('graphql-scalars');

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    items: {
      type: new GraphQLList(ItemType),
      description: 'List of all items',
      resolve: () => getItems(),
    },
    restaurants: {
      type: new GraphQLList(RestaurantType),
      description: 'List of all restaurants',
      resolve: () => getRestaurants(),
    },
    restaurant: {
      type: RestaurantType,
      description: 'Individual restaurant',
      args: {
        id: { type: GraphQLObjectID },
      },
      resolve: (_, args) => getRestaurantDetails(args.id),
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

const graphql = graphqlHTTP({
  schema,
  graphiql: true,
});

module.exports = graphql;
