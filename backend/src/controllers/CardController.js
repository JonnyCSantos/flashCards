const Card = require('../models/Card')

module.exports = {
    async index(req, res) {
        // find all cards
        const allCards = await Card.find()
        return res.json(allCards)
    },
    async show(req, res) {
        try {
            // find only one card by id
            const cardSelected = await Card.findOne({ _id: req.params.id })
            return res.json(cardSelected)
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async getByDeckId(req, res) {
        try {
            // find only one card by id
            const cardSelected = await Card.find({ deckId: req.params.deckId })
            console.log(cardSelected)
            return res.json(cardSelected)
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async create(req, res) {
        try {
            //get entry
            const { front, back, deckId } = req.body;

            // check if card exists
            const cardExists = await Card.findOne({
                front: front,
                back: back,
                deckId: deckId
            });
            if (cardExists) {
                return res.json({ message: "card already exists" });
            }

            // create a card if not exists
            const cardCreated = await Card.create({
                front: front,
                back: back,
                deckId: deckId
            })
            return res.json({ "Created with Success": cardCreated })

        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async delete(req, res) {
        try {
            // delete card by id
            const cardDeleted = await Card.deleteOne({ _id: req.params.id })
            return res.json({ deleted: cardDeleted })
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async update(req, res) {
        try {
            // get body json
            const { front, back, deckId } = req.body
            // update based in body json
            const cardUpdated = await Card.updateOne({ _id: req.params.id }, {
                front: front,
                back: back,
                deckId: deckId
            })
            return res.json({ updated: cardUpdated })
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    }
}