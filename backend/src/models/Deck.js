const { Schema, model } = require('mongoose')

const DeckSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = model('Deck', DeckSchema)