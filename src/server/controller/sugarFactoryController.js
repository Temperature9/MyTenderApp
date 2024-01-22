const Contractor = require('../models/contractor');
const Project = require('../models/project');

const getContractors = async (req, res) => {
  try {
    const contractors = await Contractor.find();
    res.json(contractors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createContractor = async (req, res) => {
  try {
    const contractor = await Contractor.create(req.body);
    res.status(201).json(contractor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getContractors,
  getProjects,
  createContractor,
  createProject,
};
