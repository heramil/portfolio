const router = require("express").Router();
const controller = require("./projects.controller");

router
  .route("/")
  .get(controller.list)

module.exports = router