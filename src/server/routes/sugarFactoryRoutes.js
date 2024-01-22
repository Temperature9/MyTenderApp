// sugarFactoryRoutes.js
const express = require('express');
const router = express.Router();
const Contractor = require('../models/contractor'); // Adjust the path and model name
const Project = require('../models/project'); // Adjust the path and model name

// Route to get contractors
router.get('/contractors', async (req, res) => {
  try {
    const contractors = await contractor.find();
    res.json(contractors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to get projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
