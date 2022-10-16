const { model } = require('mongoose');

const ItemSchema = require('./item');

const Item = model('item', ItemSchema);

module.exports = { Item };
