const express = require("express");
const { userControllers } = require("../controllers")
const routers = express.Router();


routers.post("/login",userControllers.login)

module.exports = routers;