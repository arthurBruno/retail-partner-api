const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  address: {
    _id: { type: Schema.Types.ObjectId },
    number: { type: String, required: true },
    complement: { type: String, required: true },
  },
}, { collection: 'customer' });

module.exports = mongoose.model('customer', customerSchema);
