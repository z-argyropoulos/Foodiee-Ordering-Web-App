const { Schema } = require('mongoose');
const { ObjectId } = require('../../types/mongoose');

const ItemSchema = new Schema({
  restaurantId: { type: ObjectId, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});

module.exports = ItemSchema;
