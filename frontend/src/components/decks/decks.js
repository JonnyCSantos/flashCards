import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function () {
    const [decks, setDecks] = useState([])

    // get all decks
    useEffect(() => {
        axios.get(`http://localhost:3333/decks`)
            .then(res => {
                setDecks(res.data)
            })
    }, [decks]);
    

    // new Deck
    const [isAdding, setIsAdding] = useState(false)
    const [newDeck, setNewDeck] = useState('')

    function handleAdd (){
        setIsAdding(true)
    }

    function handleChangeAdd (e) {
        setNewDeck(e)
    }

    function handleAddSubmit(e){
        e.preventDefault()
        axios.post(`http://localhost:3333/decks`, {
            name: newDeck
        })
        .then(res => {
        })
        setIsAdding(false)
    }

    //delete a deck
    function handleDelete (id) {
        axios.delete(`http://localhost:3333/decks/${id}`)
            .then(res => {
                alert('Sucesso, Deck deletado!')
            })
            .catch(error => {
                alert(error)
            })
    }
    
    // Edit a deck
    function handleEdit (){
        
    }

    // render 
    return (
        <div>
            {isAdding ? 
                <div className="deck__healpers">
                    <form action="" onSubmit={(e) => handleAddSubmit(e)}>
                        <input type="text" name="addDeck" id="addDeck" onChange={(e) => handleChangeAdd(e.target.value)}/>
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
                    <li className="deck__item" key={deck._id}>
                        <span>
                            <strong>{deck.name}</strong>
                            <button type="button" onClick={() => handleEdit()}>Edit</button>
                            <button type="button" onClick={() => handleDelete(deck._id)}>delete</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}