const { storeAddressSchema } = require('./address');
const { productCategoriesSchema } = require('./product');

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  address: storeAddressSchema,
  categories: [String],
  rating: Number,
  deliveryTimeRange: [Number],
  minOrder: String,
  isOpen: Boolean,
  catalog: [productCategoriesSchema],
});

StoreSchema.index({ categories: 1 });

// Export Models
const Store = mongoose.model('store', StoreSchema);

module.exports = { Store };
