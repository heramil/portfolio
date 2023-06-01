const express = require("express");
const cors = require("cors");
const app = express();
const projectsRouter = require("./projects/projects.router");

app.use(cors());
app.use(express.json());

app.use("/", projectsRouter);

module.exports = app;