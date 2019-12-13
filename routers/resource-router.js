const express = require('express');

const Resource = require('../data/model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resource.getResources()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Get Resource'
      });
    });
});

router.post('/', (req, res) => {
  const resourceData = req.body;

  Resource.addResource(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Add Resource'
      });
    });
});

module.exports = router;
