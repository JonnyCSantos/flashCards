const express = require('express');
const CardController = require('./controllers/CardController')

const routes = express.Router();

routes.get('/cards', CardController.index)
routes.post('/cards', CardController.store)
routes.delete('/deleteCards', CardController.delete)

module.exports = routes;