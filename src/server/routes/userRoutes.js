// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Multer for handling file uploads
const multer = require('multer');
const storage = multer.memoryStorage(); // Store files in memory (you might want to adjust this based on your requirements)
const upload = multer({ storage });

router.post('/login', async (req, res) => {
  try {
    const { username, password, userType } = req.body;

    // Simple validation
    if (!username || !password || !userType) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    let user;
    if (userType === 'subContractor') {
      // Find sub-contractor by username
      user = await User.findOne({ username, userType });
    } else {
      // Find other user types by username
      user = await User.findOne({ username });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Send a success response
    res.status(200).json({ message: 'Login successful', userType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
