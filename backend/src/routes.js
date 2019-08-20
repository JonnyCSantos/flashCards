const express = require('express');
const CardController = require('./controllers/CardController')
const DeckController = require('./controllers/DeckController')

const routes = express.Router();

// Deck Routes
routes.get('/decks', DeckController.index)
routes.get('/decks/:id', DeckController.show)
routes.post('/decks', DeckController.create)
routes.delete('/decks/:id', DeckController.delete)
routes.put('/decks/:id', DeckController.update)

// Card Routes
routes.get('/cards', CardController.index)
routes.get('/cards/:id', CardController.show)
routes.get('/cardsByDeckId/:deckId', CardController.getByDeckId)
routes.post('/cards', CardController.create)
routes.delete('/cards/:id', CardController.delete)
routes.put('/cards/:id', CardController.update)

module.exports = routes;