/**
 * @param {import("knex").Knex} knex
 * @returns {promises<void>}
 */

export const up = function (knex) {
  return knex.schema.createTable("sign", (table) => {
    table.increments("id").primary();
    table.string("usuario").unique().notNullable();
    table.string("senha").notNullable();
    table
      .bigInteger("usuarioId")
      .index()
      .notNullable()
      .references("id")
      .inTable("usuarios")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
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
