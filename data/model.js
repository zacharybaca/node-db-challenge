const db = require('./db-config');

module.exports = {
  getProjects,
  getTasks,
  getResources,
  addProject,
  addTask,
  addResource,
  findByProjectId,
  findByResourceId,
  findByTaskId
};

function getProjects() {
  return db('projects');
}

function getTasks(projectId) {
  return db('tasks');
}

function getResources() {
  return db('resources');
}

function findByProjectId(id) {
  return db('projects')
    .where({ id })
    .first();
}

function findByTaskId(id) {
  return db('tasks')
    .where({ id })
    .first();
}

function findByResourceId(id) {
  return db('resources')
    .where({ id })
    .first();
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => {
      return findByProjectId(ids[0]);
    });
}

function addTask(task) {
  return db('tasks')
    .insert(task)
    .then(ids => {
      return findByTaskId(ids[0]);
    });
}

function addResource(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => {
      return findByResourceId(ids[0]);
    });
}
