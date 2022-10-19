const { GraphQLNonNull } = require('graphql');
const ItemType = require('../../types/Item');
const CreateItemInputType = require('../../types/inputs/CreateItem');
const { addItem } = require('../../../actions/item');

const createItem = {
  type: ItemType,
  description: 'Create a new item for a restaurant',
  args: {
    input: {
      type: new GraphQLNonNull(CreateItemInputType),
    },
  },
  resolve: (_, { input }) => addItem(input),
};

module.exports = { createItem };
