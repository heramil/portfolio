const projects = require("../fixtures/projects");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE projects RESTART IDENTITY CASCADE")
    .then(() => knex("projects").insert(projects));
};
