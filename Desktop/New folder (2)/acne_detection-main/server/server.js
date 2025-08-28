
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const admin = require('firebase-admin');
// const Image = require('./models/Image');
// const path = require('path');
// const serviceAccount = require('../ml-backend/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const app = express();
// const upload = multer({ storage: multer.memoryStorage() });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/skin_disease_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('✅ Connected to MongoDB');
// }).catch((error) => {
//   console.error('❌ MongoDB connection error:', error);
// });

// // Auth Middleware
// const authenticateUser = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split('Bearer ')[1];
//     if (!token) {
//       return res.status(401).json({ error: 'No token provided' });
//     }
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     console.error('Auth error:', error);
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };



// app.post('/api/images', authenticateUser, upload.single('image'), async (req, res) => {
//   try {
//     console.log('🔍 Request received');
//     console.log('User:', req.user?.uid);
//     console.log('File:', req.file);
//     console.log('analysisResult:', req.body.analysisResult);
//     console.log('herbalRemedies:', req.body.herbalRemedies);
//     console.log('dietPlan:', req.body.dietPlan);

//     if (!req.file || !req.file.buffer) {
//       return res.status(400).json({ error: 'Image file is missing or empty' });
//     }

//     // JSON Parsing
//     let analysisResult, herbalRemedies, dietPlan;
//     try {
//       analysisResult = JSON.parse(req.body.analysisResult || '{}');
//       herbalRemedies = JSON.parse(req.body.herbalRemedies || '{}');
//       dietPlan = JSON.parse(req.body.dietPlan || '{}');
//     } catch (jsonError) {
//       console.error('❌ JSON Parse Error:', jsonError);
//       return res.status(400).json({ error: 'Invalid JSON in body' });
//     }

//     const image = new Image({
//       userId: req.user.uid,
//       imageUrl: '',
//       imageData: req.file.buffer,
//       contentType: req.file.mimetype,
//       analysisResult,
//       herbalRemedies,
//       dietPlan,
//       metadata: {
//         originalName: req.file.originalname,
//         size: req.file.size
//       }
//     });

//     await image.save();
//     console.log('✅ Image saved successfully');
//     res.status(201).json({ message: 'Saved successfully', imageId: image._id });

//   } catch (error) {
//     console.error('❌ Error saving image:', error);
//     res.status(500).json({ error: 'Failed to save image' });
//   }
// });

// // GET: List Images
// app.get('/api/images', authenticateUser, async (req, res) => {
//   try {
//     const images = await Image.find({ userId: req.user.uid })
//       .select('-imageData')
//       .sort({ createdAt: -1 });
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch images' });
//   }
// });

// // GET: Retrieve Image by ID
// app.get('/api/images/:id', authenticateUser, async (req, res) => {
//   try {
//     const image = await Image.findOne({
//       _id: req.params.id,
//       userId: req.user.uid
//     });

//     if (!image) {
//       return res.status(404).json({ error: 'Image not found' });
//     }

//     res.set('Content-Type', image.contentType);
//     res.send(image.imageData);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch image' });
//   }
// });
// // DELETE: Remove Image by ID
// app.delete('/api/images/:id', authenticateUser, async (req, res) => {
//   try {
//     console.log(`Delete request for ID: ${req.params.id} from user: ${req.user.uid}`);
    
//     // Validate ID format first
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ error: 'Invalid ID format' });
//     }

//     const result = await Image.deleteOne({
//       _id: req.params.id,
//       userId: req.user.uid
//     });

//     console.log('MongoDB delete result:', result); // Log the result
    
//     if (result.deletedCount === 0) {
//       return res.status(404).json({ 
//         error: 'Image not found or not owned by user',
//         details: {
//           requestedId: req.params.id,
//           userId: req.user.uid
//         }
//       });
//     }

//     res.json({ success: true, message: 'Image deleted successfully' });
//   } catch (error) {
//     console.error('Full delete error:', error);
//     res.status(500).json({ 
//       error: 'Failed to delete image',
//       details: error.message,
//       stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//     });
//   }
// });


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const admin = require('firebase-admin');
// const Image = require('./models/Image');
// const Disease = require('./models/Disease'); // Import the Disease model
// const path = require('path');
// const serviceAccount = require('../ml-backend/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const app = express();
// const upload = multer({ storage: multer.memoryStorage() });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/skin_disease_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('✅ Connected to MongoDB');
// }).catch((error) => {
//   console.error('❌ MongoDB connection error:', error);
// });

// // Auth Middleware
// const authenticateUser = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split('Bearer ')[1];
//     if (!token) {
//       return res.status(401).json({ error: 'No token provided' });
//     }
//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken;
//     next();
//   } catch (error) {
//     console.error('Auth error:', error);
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };

// // POST: Save Image and Analysis Result
// // app.post('/api/images', authenticateUser, upload.single('image'), async (req, res) => {
// //   try {
// //     console.log('🔍 Request received');
// //     console.log('User:', req.user?.uid);
// //     console.log('File:', req.file);
// //     console.log('analysisResult:', req.body.analysisResult);

// //     if (!req.file || !req.file.buffer) {
// //       return res.status(400).json({ error: 'Image file is missing or empty' });
// //     }

// //     let analysisResult;
// //     try {
// //       analysisResult = JSON.parse(req.body.analysisResult || '{}');
// //     } catch (jsonError) {
// //       console.error('❌ JSON Parse Error:', jsonError);
// //       return res.status(400).json({ error: 'Invalid JSON in analysisResult' });
// //     }

// //     // Validate disease exists in Disease collection
// //     const disease = await Disease.findOne({ name: analysisResult.disease });
// //     if (!disease) {
// //       return res.status(400).json({ error: 'Invalid disease name' });
// //     }

// //     const image = new Image({
// //       userId: req.user.uid,
// //       imageUrl: '',
// //       imageData: req.file.buffer,
// //       contentType: req.file.mimetype,
// //       analysisResult: {
// //         disease: analysisResult.disease,
// //         confidence: analysisResult.confidence,
// //         severity: analysisResult.severity,
// //         description: disease.description // Pull description from Disease collection
// //       },
// //       metadata: {
// //         originalName: req.file.originalname,
// //         size: req.file.size
// //       }
// //     });

// //     await image.save();
// //     console.log('✅ Image saved successfully');

// //     // Fetch remedies and diet plan from Disease collection
// //     res.status(201).json({
// //       message: 'Saved successfully',
// //       imageId: image._id,
// //       remedies: disease.remedies,
// //       dietPlan: disease.dietPlan
// //     });

// //   } catch (error) {
// //     console.error('❌ Error saving image:', error);
// //     res.status(500).json({ error: 'Failed to save image' });
// //   }
// // });

// // POST: Save Image and Analysis Result
// app.post('/api/images', authenticateUser, upload.single('image'), async (req, res) => {
//   try {
//     console.log('🔍 Request received');
//     console.log('User:', req.user?.uid);
//     console.log('File:', req.file);
//     console.log('analysisResult:', req.body.analysisResult);

//     if (!req.file || !req.file.buffer) {
//       return res.status(400).json({ error: 'Image file is missing or empty' });
//     }

//     let analysisResult;
//     try {
//       analysisResult = JSON.parse(req.body.analysisResult || '{}');
//     } catch (jsonError) {
//       console.error('❌ JSON Parse Error:', jsonError);
//       return res.status(400).json({ error: 'Invalid JSON in analysisResult' });
//     }

//     // Log predicted disease name
//     const predictedDisease = analysisResult.disease;
//     console.log("🔎 Looking for disease in DB:", predictedDisease);

//     // Case-insensitive match in MongoDB
//     const disease = await Disease.findOne({ name: new RegExp(`^${predictedDisease}$`, 'i') });

//     if (!disease) {
//       console.warn("⚠️ Disease not found in DB:", predictedDisease);
//       return res.status(400).json({ error: 'Invalid disease name' });
//     }

//     const image = new Image({
//       userId: req.user.uid,
//       imageUrl: '',
//       imageData: req.file.buffer,
//       contentType: req.file.mimetype,
//       analysisResult: {
//         disease: disease.name, // ensure standardized name from DB
//         confidence: analysisResult.confidence,
//         severity: analysisResult.severity,
//         description: disease.description
//       },
//       metadata: {
//         originalName: req.file.originalname,
//         size: req.file.size
//       }
//     });

//     await image.save();
//     console.log('✅ Image saved successfully');

//     // Respond with full disease info
//     res.status(201).json({
//       message: 'Saved successfully',
//       imageId: image._id,
//       remedies: disease.remedies,
//       dietPlan: disease.dietPlan
//     });

//   } catch (error) {
//     console.error('❌ Error saving image:', error);
//     res.status(500).json({ error: 'Failed to save image' });
//   }
// });


// // GET: Fetch Disease Information by Name
// app.get('/api/diseases/:name', async (req, res) => {
//   try {
//     const disease = await Disease.findOne({ name: req.params.name });
//     if (!disease) {
//       return res.status(404).json({ error: 'Disease not found' });
//     }
//     res.json({
//       name: disease.name,
//       description: disease.description,
//       remedies: disease.remedies,
//       dietPlan: disease.dietPlan
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch disease info' });
//   }
// });

// // GET: List Images
// app.get('/api/images', authenticateUser, async (req, res) => {
//   try {
//     const images = await Image.find({ userId: req.user.uid })
//       .select('-imageData')
//       .sort({ createdAt: -1 });
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch images' });
//   }
// });

// // GET: Retrieve Image by ID
// app.get('/api/images/:id', authenticateUser, async (req, res) => {
//   try {
//     const image = await Image.findOne({
//       _id: req.params.id,
//       userId: req.user.uid
//     });

//     if (!image) {
//       return res.status(404).json({ error: 'Image not found' });
//     }

//     res.set('Content-Type', image.contentType);
//     res.send(image.imageData);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch image' });
//   }
// });

// // DELETE: Remove Image by ID
// app.delete('/api/images/:id', authenticateUser, async (req, res) => {
//   try {
//     console.log(`Delete request for ID: ${req.params.id} from user: ${req.user.uid}`);
    
//     // Validate ID format first
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ error: 'Invalid ID format' });
//     }

//     const result = await Image.deleteOne({
//       _id: req.params.id,
//       userId: req.user.uid
//     });

//     console.log('MongoDB delete result:', result); // Log the result
    
//     if (result.deletedCount === 0) {
//       return res.status(404).json({ 
//         error: 'Image not found or not owned by user',
//         details: {
//           requestedId: req.params.id,
//           userId: req.user.uid
//         }
//       });
//     }

//     res.json({ success: true, message: 'Image deleted successfully' });
//   } catch (error) {
//     console.error('Full delete error:', error);
//     res.status(500).json({ 
//       error: 'Failed to delete image',
//       details: error.message,
//       stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


















const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const admin = require('firebase-admin');
const Image = require('./models/Image');
const Disease = require('./models/Disease');
const path = require('path');
const serviceAccount = require('../ml-backend/serviceAccountKey.json');
const bodyParser = require('body-parser');
const ProfileImage = require('./models/ProfileImage');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/skin_disease_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});

// Auth Middleware
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};


// POST: Save Image and Analysis Result
app.post('/api/images', authenticateUser, upload.single('image'), async (req, res) => {
  try {
    console.log('🔍 Request received');
    console.log('User:', req.user?.uid);
    console.log('File:', req.file);
    console.log('analysisResult:', req.body.analysisResult);

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: 'Image file is missing or empty' });
    }

    let analysisResult;
    try {
      analysisResult = JSON.parse(req.body.analysisResult || '{}');
    } catch (jsonError) {
      console.error('❌ JSON Parse Error:', jsonError);
      return res.status(400).json({ error: 'Invalid JSON in analysisResult' });
    }

    // Log predicted disease name
    const predictedDisease = analysisResult.disease;
    console.log("🔎 Looking for disease in DB:", predictedDisease);

    // Case-insensitive match in MongoDB
    const disease = await Disease.findOne({ name: new RegExp(`^${predictedDisease}$`, 'i') });

    if (!disease) {
      console.warn("⚠️ Disease not found in DB:", predictedDisease);
      return res.status(400).json({ error: 'Invalid disease name' });
    }

    const image = new Image({
      userId: req.user.uid,
      imageUrl: '',
      imageData: req.file.buffer,
      contentType: req.file.mimetype,
      analysisResult: {
        disease: disease.name, // ensure standardized name from DB
        confidence: analysisResult.confidence,
        severity: analysisResult.severity,
        description: disease.description
      },
      metadata: {
        originalName: req.file.originalname,
        size: req.file.size
      }
    });

    await image.save();
    console.log('✅ Image saved successfully');

    // Respond with full disease info
    res.status(201).json({
      message: 'Saved successfully',
      imageId: image._id,
      remedies: disease.remedies,
      dietPlan: disease.dietPlan
    });

  } catch (error) {
    console.error('❌ Error saving image:', error);
    res.status(500).json({ error: 'Failed to save image' });
  }
});


// GET: Fetch Disease Information by Name
app.get('/api/diseases/:name', async (req, res) => {
  try {
    const disease = await Disease.findOne({ name: req.params.name });
    if (!disease) {
      return res.status(404).json({ error: 'Disease not found' });
    }
    res.json({
      name: disease.name,
      description: disease.description,
      remedies: disease.remedies,
      dietPlan: disease.dietPlan
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch disease info' });
  }
});

// GET: List Images
app.get('/api/images', authenticateUser, async (req, res) => {
  try {
    const images = await Image.find({ userId: req.user.uid })
      .select('-imageData')
      .sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

// GET: Retrieve Image by ID
app.get('/api/images/:id', authenticateUser, async (req, res) => {
  try {
    const image = await Image.findOne({
      _id: req.params.id,
      userId: req.user.uid
    });

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.set('Content-Type', image.contentType);
    res.send(image.imageData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

// DELETE: Remove Image by ID
app.delete('/api/images/:id', authenticateUser, async (req, res) => {
  try {
    console.log(`Delete request for ID: ${req.params.id} from user: ${req.user.uid}`);
    
    // Validate ID format first
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    const result = await Image.deleteOne({
      _id: req.params.id,
      userId: req.user.uid
    });

    console.log('MongoDB delete result:', result); // Log the result
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ 
        error: 'Image not found or not owned by user',
        details: {
          requestedId: req.params.id,
          userId: req.user.uid
        }
      });
    }

    res.json({ success: true, message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Full delete error:', error);
    res.status(500).json({ 
      error: 'Failed to delete image',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// === Route: Upload Profile Image ===
app.post('/upload-profile-image', upload.single('image'), async (req, res) => {
  try {
    const userId = req.body.userId;
    const imageBuffer = req.file.buffer;
    const contentType = req.file.mimetype;

    if (!userId || !imageBuffer || !contentType) {
      return res.status(400).json({ error: 'Missing required data' });
    }

    // Save or update profile image in ProfileImage collection
    await ProfileImage.updateOne(
      { userId },
      {
        $set: {
          imageData: imageBuffer,
          contentType,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );

    console.log('✅ Profile image uploaded for user:', userId);
    res.status(200).json({ message: 'Profile image uploaded successfully' });
  } catch (error) {
    console.error('❌ Error uploading profile image:', error.message);
    res.status(500).json({ error: 'Failed to upload profile image' });
  }
});


// GET: Get Profile Image
app.get('/get-profile-image/:userId', async (req, res) => {
  try {
    const profile = await ProfileImage.findOne({ userId: req.params.userId });


    if (!profile || !profile.imageData) {
      return res.status(404).json({ error: 'Profile image not found' });
    }

    const base64Image = profile.imageData.toString('base64');
    res.json({ imageBase64: base64Image, contentType: profile.contentType });
  } catch (error) {
    console.error('❌ Error fetching profile image:', error);
    res.status(500).json({ error: 'Failed to fetch profile image' });
  }
});


  

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
