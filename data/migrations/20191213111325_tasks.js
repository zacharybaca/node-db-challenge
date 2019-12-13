exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .varchar('project_name')
      .notNullable()
      .references('name')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .varchar('project_description')
      .references('description')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.varchar('description', 255).notNullable();
    tbl.varchar('notes', 255);
    tbl
      .boolean('completed')
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
