const Card = require('../models/Card')


module.exports = {
    async index(req, res) {
        console.log('oi index');

        return null
    },
    async store(req, res) {
        const { front, back } = req.body;
        console.log(front, back)

        const card = await Card.create({
            front: front,
            back: back
        })

        return res.json(card)
    }
}