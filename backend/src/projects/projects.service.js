const knex = require("../db/connection");

const list = () => {
  return knex("projects").select("*");
}

module.exports = {
  list
}