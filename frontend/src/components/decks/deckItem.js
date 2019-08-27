import React, { useState } from 'react'
import axios from 'axios'

export default function (props) {
    const { deck } = props
    const [isEdit, setIsEdit] = useState(false)
    const [deckEdited, setDeckEdited] = useState(false)

    // Edit a deck
    function handleStartEdit() {
        setIsEdit(true)
    }

    function handleEditChange(e) {
        setDeckEdited(e.target.value)
    }

    async function handleEdit(id) {
        await axios.put(`http://localhost:3333/decks/${id}`, {
            name: deckEdited
        })

        setIsEdit(false)
    }

    //delete a deck
    function handleDelete(id) {
        axios.delete(`http://localhost:3333/decks/${id}`)
            .then(
                alert('Sucesso, Deck deletado!')
            )
            .catch(error => {
                alert(error)
            })
    }
    // render 
    return (
        <li className="deck__item">
            {isEdit ?
                <span>
                    <input type="text" defaultValue={deck.name} onChange={(e) => handleEditChange(e)} />
                    <button type="button" onClick={() => handleEdit(deck._id)}>Editar</button>
                </span>
                :
                <span>
                    <strong onDoubleClick={() => handleStartEdit()}>{deck.name}</strong>
                    <button type="button" onClick={() => handleStartEdit()}>Edit</button>
                    <button type="button" onClick={() => handleDelete(deck._id)}>delete</button>
                </span>
            }
        </li>
    )
}