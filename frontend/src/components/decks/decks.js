import React, { useEffect, useState } from 'react'
import DeckItem from './deckItem'
import axios from 'axios'


export default function Decks() {
    const [decks, setDecks] = useState([])

    // get all decks
    useEffect(() => {
        async function loadDecks() {
            const response = await axios.get(`http://localhost:3333/decks`)
            setDecks(response.data)
        }
        loadDecks()
    }, [decks]);


    // new Deck
    const [isAdding, setIsAdding] = useState(false)
    const [newDeck, setNewDeck] = useState('')

    function handleAdd() {
        setIsAdding(true)
    }

    function handleChangeAdd(e) {
        setNewDeck(e)
    }

    function handleAddSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3333/decks`, {
            name: newDeck
        })
        setIsAdding(false)
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
                    <DeckItem key={deck._id} deck={deck} />
                ))}
            </ul>
        </div>
    )
}