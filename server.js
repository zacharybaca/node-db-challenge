const express = require('express');

const ProjectsRouter = require('./routers/projects-router.js');

const ResourceRouter = require('./routers/resource-router');

const TasksRouter = require('./routers/tasks-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TasksRouter);

module.exports = server;
