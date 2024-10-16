const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer storage with dynamic destination
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const documentType = req.body.documentType;
    
    // Set folder based on document type
    let folder = 'uploads/'; // default folder
    

    if (documentType === 'pan') {
      folder = 'uploads/Pan/';
    } else if (documentType === 'adhar') {
      folder = 'uploads/Adhar/';
    }else if (documentType === 'driving_licence') {
      folder = 'uploads/DrivingLicence/';
    }
    else if (documentType === 'marks_certificate') {
      folder = 'uploads/MarksCertificates/';
    }
    // Ensure the folder exists, if not, create it
    fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // e.g., 167891654321.png
  }
});

const upload = multer({ storage });

module.exports = upload;
