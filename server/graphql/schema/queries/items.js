const { GraphQLList } = require('graphql');
const ItemType = require('../../types/Item');
const { getItems } = require('../../../actions/item');

const items = {
  type: new GraphQLList(ItemType),
  description: 'List of all items',
  resolve: () => getItems(),
};

module.exports = items;
