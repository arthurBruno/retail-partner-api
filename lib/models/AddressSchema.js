const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  street: { type: String, required: true },
  neigborhood: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String },
  createdAt: { type: Date, default: new Date() },
}, { collection: 'address' });

module.exports = mongoose.model('address', addressSchema);
