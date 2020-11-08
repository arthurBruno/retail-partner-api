const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleSchema = new Schema({
  amount: { type: Number, required: true },
  paymentMethod: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() },
  responsibleEmployees: { type: Array },
  
  _customer: { type: Schema.Types.ObjectId, required: true },
  _product: { type: Schema.Types.ObjectId, required: true },
  _saleMethod: { type: Schema.Types.ObjectId, required: true },
}, { collection: 'sale' });

module.exports = mongoose.model('sale', saleSchema);
