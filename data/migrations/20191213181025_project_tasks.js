exports.up = function(knex) {
  return knex.schema.createTable('project_tasks', tbl => {
    tbl.primary(['project_id', 'task_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project_tasks');
};
