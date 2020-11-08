const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema({
  name: { type: String, required: true },
  profissionalArea: { type: String },
  tagColor: { type: String },
  createdAt: { type: Date, default: new Date() }
}, { collection: 'department' });

module.exports = mongoose.model('department', departmentSchema);
