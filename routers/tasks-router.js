const express = require('express');

const Task = require('../data/model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Task.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Retrieve Tasks'
      });
    });
});

router.post('/', (req, res) => {
  const taskData = req.body;

  Task.addTask(taskData)

    .then(task => {
      if (task.completed === 0) {
        task.completed = false;
      } else {
        task.completed = true;
      }
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed To Add Task'
      });
    });
});

module.exports = router;
