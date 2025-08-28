const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, 
  description: { type: String, required: true },
  remedies: [{ type: String }], 
  dietPlan: [{ type: String }], 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Disease', diseaseSchema);