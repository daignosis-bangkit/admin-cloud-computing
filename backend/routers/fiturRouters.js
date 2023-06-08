const express = require("express");
const { fiturControllers } = require("../controllers")
const routers = express.Router();


routers.get("/traffic",fiturControllers.traffic)

module.exports = routers;