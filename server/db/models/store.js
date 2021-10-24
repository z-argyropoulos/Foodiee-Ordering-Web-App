const { storeAddressSchema } = require('./address');
const { productSchema } = require('./product');

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  description: String,
  address: storeAddressSchema,
  category: [String],
  rating: Number,
  deliveryTimeRange: Array,
  minOrder: String,
  isOpen: Boolean,
  catalog: [productSchema],
});

StoreSchema.index({ category: 1 });

// Export Models
const Store = mongoose.model('store', StoreSchema);

module.exports = { Store };
