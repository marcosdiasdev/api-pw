exports.up = function (knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments().primary();
    table.string("nome");
    table.string("descricao");
    table.string("imagem");
    table.integer("fabricantes_id").references("fabricantes.id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};
