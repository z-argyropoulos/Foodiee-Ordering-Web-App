const { Schema } = require('mongoose');

const RestaurantAddressSchema = new Schema({
  street: { type: String, required: true },
  region: { type: String, required: true },
  postal_code: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = RestaurantAddressSchema;
