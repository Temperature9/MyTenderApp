const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  // Other fields as needed
});

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
