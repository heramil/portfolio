const projectsService = require("./projects.service");

const list = async (req, res, next) => {
  let projects = await projectsService.list();
  res.json({ projects });
} 

module.exports = {
  list
}