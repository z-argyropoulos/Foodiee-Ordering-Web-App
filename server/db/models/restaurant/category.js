const { Schema } = require('mongoose');

const RestaurantCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

RestaurantCategorySchema.index({ name: 1 });

module.exports = RestaurantCategorySchema;
