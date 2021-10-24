const mongoose = require('mongoose');

const addressBaseSchema = {
  street: { type: String, required: true },
  region: { type: String, required: true },
  postal_code: { type: String, required: true },
  city: { type: String, required: true },
};

const userAddressSchema = new mongoose.Schema({
  friendly_name: { type: String, required: true },
  recipient: { type: String, required: true },
  ...addressBaseSchema,
  telephone: [String],
  doorbell: { type: String, required: true },
  floor: Number,
  note: String,
});

const storeAddressSchema = new mongoose.Schema({
  ...addressBaseSchema,
});

module.exports = { userAddressSchema, storeAddressSchema };
