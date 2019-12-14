exports.up = function(knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments();

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
