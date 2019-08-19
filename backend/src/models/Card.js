const { Schema, model } = require('mongoose')

const CardSchema = new Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    doneAt: {
        type: Date,
        default: null
    }
})


module.exports = model('Card', CardSchema)