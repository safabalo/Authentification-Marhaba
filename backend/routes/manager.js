const express = require("express");
const routerManager = express.Router();
const manager = require("../controllers/manager");

routerManager.get("/manager/me", manager.managerLogin);

module.exports = routerManager;
