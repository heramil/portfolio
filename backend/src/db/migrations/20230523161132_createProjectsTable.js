/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("projects", (table) => {
    table.increments("project_id").primary();
    table.string("project_type");
    table.jsonb("project_companies")
    table.string("project_title");
    table.text("project_description");
    table.string("project_period_begin");
    table.string("project_period_end");
    table.string("project_duration");
    table.text("project_goal");
    table.jsonb("project_process");
    table.text("project_outcome");
    table.jsonb("project_credits");
    table.jsonb("project_tools")
    table.jsonb("project_technologies");
    table.jsonb("project_images");
    table.string("project_backgroundColor");
    table.string("project_color");
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("projects")
};
