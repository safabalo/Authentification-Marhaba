const express = require("express");
const routerClient = express.Router();
const client = require("../controllers/client");

routerClient.get("/client/me", client.clientLogin);

module.exports = routerClient;
