import React, { useEffect, useState } from 'react'
import DeckItem from './deckItem'
import api from '../../services/api'


export default function Decks() {
    const [decks, setDecks] = useState([])

    function loadDecks() {
        const load = async () => {
            const response = await api.get(`/decks`)
            setDecks(response.data)
        }
        load();
    }
    // get all decks
    useEffect(loadDecks, []);

    console.log(decks)
    // new Deck
    const [isAdding, setIsAdding] = useState(false)
    const [newDeck, setNewDeck] = useState('')

    function handleAdd() {
        setIsAdding(true)
    }

    function handleChangeAdd(e) {
        setNewDeck(e)
    }

    async function handleAddSubmit(e) {
        e.preventDefault()
        await api.post(`http://localhost:3333/decks`, {
            name: newDeck
        })
        setIsAdding(false)
        loadDecks()
    }

    // render 
    return (
        <div>
            {isAdding ?
                <div className="deck__healpers">
                    <form action="" onSubmit={(e) => handleAddSubmit(e)}>
                        <input type="text" name="addDeck" id="addDeck" onChange={(e) => handleChangeAdd(e.target.value)} />
                        <button type="submit">Adicionar</button>
                    </form>
                </div>
                :
                <div className="deck__healpers">
                    <button type="button" onClick={() => handleAdd()}>+</button>
                </div>
            }
            <ul className="deck__list">
                {decks.map(deck => (
                    <DeckItem load={loadDecks} key={deck._id} deck={deck} />
                ))}

            </ul>
        </div>
    )
}