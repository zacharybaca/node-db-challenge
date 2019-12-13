exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl
      .integer('resource_id', 255)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.varchar('name', 255).notNullable();
    tbl.varchar('description', 255);
    tbl.boolean('completed').defaultTo('false');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
