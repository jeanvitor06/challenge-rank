exports.up = function (knex) {
  return knex.schema.createTable('App', function (table) {
    table.increments('id').primary();
    table.string('bundleId').notNullable();
    table.string('name').notNullable();
    table.string('developerCompany').notNullable();
    table.string('rating').nullable();
    table.string('icon').nullable();
    table.string('value').notNullable();
    table.string('categoryName').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('App')
};