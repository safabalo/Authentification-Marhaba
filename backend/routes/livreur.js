const express = require('express');
const routerLivreur = express.Router()
const livreur = require('../controllers/livreur')

routerLivreur.get('/livreur/me', livreur.livreurLogin)
routerLivreur.post('/livreur/add', livreur.AddingLivreur)

module.exports = routerLivreur