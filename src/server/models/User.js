// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add Aadhar card details
  aadharCard: {
    cardNumber: {
      type: String,
      required: true,
    },
    // Add other Aadhar card details as needed
  },
  userType: {
    type: String,
    enum: ['contractor', 'subContractor'], // Specify possible values for userType
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
