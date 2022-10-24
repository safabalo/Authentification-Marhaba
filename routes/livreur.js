const express = require('express');
const routerLivreur = express.Router()
const livreur = require('../controllers/livreur')

routerLivreur.get('/livreur/me', livreur.livreurLogin)

module.exports = routerLivreur