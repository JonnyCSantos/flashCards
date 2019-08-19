const Card = require('../models/Card')

module.exports = {
    async index(req, res) {
        const cards = await Card.find()
        // console.log()
        return res.json(cards)
    },
    async store(req, res) {
        const { front, back } = req.body;

        const card = await Card.create({
            front: front,
            back: back
        })

        return res.json(card)
    },
    async delete(req, res) {
        console.log('id', req.headers.id)
        const db = req.db
        
        console.log(db.collection('cards'))
        // db.collection('cards').removeOne({"_id": objectId(req.headers.id)}, (err, result) => {
        // if (err) return console.log('oi',err)
        // })
        return res.json({"message": "Success"})
    }
}