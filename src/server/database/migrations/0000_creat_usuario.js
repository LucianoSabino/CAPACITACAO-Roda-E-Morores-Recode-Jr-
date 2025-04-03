/**
 * @param {import("knex").Knex} knex
 * @returns {promises<void>}
 */

export const up = function (knex) {
  return knex.schema.createTable("usuarios", (table) => {
    table.increments("id").primary();
    table.string("nome").notNullable();
    table.string("cpf").unique().notNullable();
    table.string("telefone").notNullable();
    table.string("email").unique().notNullable();
    table.string("cidade").notNullable();
    table.string("estado").notNullable();
    table.string("pais").notNullable();
    table.string("bairro").notNullable();
    table.string("endereco").notNullable();
    table.date("data").defaultTo(knex.raw("CURRENT_DATE")).notNullable();
  });
};

/**
 * @param {import("knex").Knex} knex
 * @returns {promises<void>}
 */

export const down = function (knex) {
  return knex.schema.dropTableIfExists("usuarios");
};
