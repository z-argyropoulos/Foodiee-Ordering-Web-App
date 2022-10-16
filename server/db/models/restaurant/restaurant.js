const { Schema } = require('mongoose');
const AddressSchema = require('./address');

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  address: AddressSchema,
  categories: [{ type: String }],
  rating: { type: Number },
  deliveryTimeRange: [{ type: Number }],
  minOrder: { type: String },
  isOpen: { type: Boolean },
});

RestaurantSchema.index({ categories: 1 });

module.exports = RestaurantSchema;
