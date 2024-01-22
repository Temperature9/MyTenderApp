const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  bidDeadline: { type: Date, required: true },
  // Other fields as needed
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
