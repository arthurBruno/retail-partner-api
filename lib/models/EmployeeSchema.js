const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  document: { type: String, required: true },
  responsibility: { type: String, required: true },
  roles: { type: Array, required: true },
  createdAt: { type: Date, default: new Date() },

  _department: { type: Schema.Types.ObjectId },
  _address: { type: Schema.Types.ObjectId }
}, { collection: 'employee' });

module.exports = mongoose.model('employee', employeeSchema);
