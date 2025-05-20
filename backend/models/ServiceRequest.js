const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
  name: String,
  surname: String,
  phone: String,
  brand: String,
  model: String,
  desc: String,
  trackCode: { type: String, unique: true },
  status: { type: String, default: 'Teslim Alındı' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema); 