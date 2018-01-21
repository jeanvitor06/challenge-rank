exports.up = function (knex) {
  return knex.schema.createTable('App', function (table) {
    table.string('bundleId').primary();
    table.string('name', 100).notNullable();
    table.string('developerCompany', 30).notNullable();
    table.float('rating').nullable();
    table.string('icon', 20).nullable();
    table.float('value').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('App')
};