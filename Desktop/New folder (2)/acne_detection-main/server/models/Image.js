// // models/Image.js
// const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   imageUrl: { type: String }, // <- REMOVE required: true
//   imageData: { type: Buffer, required: true },
//   contentType: { type: String, required: true },
//   analysisResult: { type: Object, default: {} },
//   herbalRemedies: { type: Object, default: {} },
//   dietPlan: { type: Object, default: {} },
//   metadata: {
//     originalName: String,
//     size: Number
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Image', imageSchema);
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  imageUrl: { type: String, default: '' },
  imageData: { type: Buffer, required: true },
  contentType: { type: String, required: true },
  analysisResult: {
    disease: { type: String, required: true }, 
    confidence: { type: Number, required: true },
    severity: { type: String, required: true },
    description: { type: String }
  },
  metadata: {
    originalName: { type: String },
    size: { type: Number }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);