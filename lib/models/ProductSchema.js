const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: String, required: true },

  // imageUrl: { type: String, required: true },
}, { collection: 'product' });

module.exports = mongoose.model('product', productSchema);
