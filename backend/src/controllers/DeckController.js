const Deck = require('../models/Deck')

module.exports = {
    async index(req, res) {
        // find all decks
        const allDecks = await Deck.find()
        return res.json(allDecks)
    },
    async show(req, res) {
        try {
            // find only one Deck by id
            const deckSelected = await Deck.findOne({ _id: req.params.id })
            return res.json(deckSelected)
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async create(req, res) {
        try {
            //get entry
            const { name } = req.body;

            // check if Deck exists
            const DeckExists = await Deck.findOne({
                name: name
            });
            if (DeckExists) {
                return res.json({ message: "Deck already exists" });
            }

            // create a Deck if not exists
            const DeckCreated = await Deck.create({
                name: name
            })
            return res.json({ "Created with Success": DeckCreated })

        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async delete(req, res) {
        try {
            // delete Deck by id
            const DeckDeleted = await Deck.deleteOne({ _id: req.params.id })
            return res.json({ deleted: DeckDeleted })
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    },
    async update(req, res) {
        try {
            // get body json
            const { name } = req.body
            // update based in body json
            const DeckUpdated = await Deck.updateOne({ _id: req.params.id }, {
                name: name
            })
            return res.json({ updated: DeckUpdated })
        } catch (error) {
            return res.status(400).json({ Error: error })
        }
    }
}