const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleMethodSchema = new Schema({
  name: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() },
}, { collection: 'saleMethod' });

module.exports = mongoose.model('saleMethod', saleMethodSchema);
