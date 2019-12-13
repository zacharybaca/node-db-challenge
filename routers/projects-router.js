const express = require('express');

const Projects = require('../data/model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Retrieve Projects'
      });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
    .then(project => {
      if (project.completed === 0) {
        project.completed = false;
      } else {
        project.completed = true;
      }
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Add Project'
      });
    });
});

module.exports = router;
