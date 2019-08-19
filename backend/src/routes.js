const express = require('express');
const CardController = require('./controllers/CardController')

const routes = express.Router();

routes.get('/cards', CardController.index)
routes.get('/cards/:id', CardController.show)
routes.post('/cards', CardController.create)
routes.delete('/cards/:id', CardController.delete)
routes.put('/cards/:id', CardController.update)

module.exports = routes;