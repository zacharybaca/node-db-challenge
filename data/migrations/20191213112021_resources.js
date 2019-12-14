exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments();
    tbl
      .varchar('name', 255)
      .notNullable()
      .unique();
    tbl.varchar('description', 255);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
