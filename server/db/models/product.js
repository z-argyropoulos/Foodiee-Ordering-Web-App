const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const productCategoriesSchema = new mongoose.Schema({
  category: { type: String, required: true },
  products: [productSchema],
});

module.exports = { productCategoriesSchema };
