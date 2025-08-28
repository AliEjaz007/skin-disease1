const mongoose = require('mongoose');

const profileImageSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true,
    unique: true
  },
  imageData: { 
    type: Buffer, 
    required: true 
  },
  contentType: { 
    type: String, 
    required: true 
  },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

profileImageSchema.virtual('imageUrl').get(function() {
  return `/api/profile/images/${this.userId}`;
});

module.exports = mongoose.model('ProfileImage', profileImageSchema);
