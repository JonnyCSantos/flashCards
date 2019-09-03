import React, { useState } from 'react'
import api from '../../services/api'

export default function (props) {
    const { deck, load } = props
    const [isEdit, setIsEdit] = useState(false)
    const [deckEdited, setDeckEdited] = useState('')

    // Edit a deck
    function handleStartEdit() {
        setIsEdit(true)
        setDeckEdited(deck.name)
    }

    function handleEditChange(e) {
        setDeckEdited(e.target.value)
    }

    async function handleEdit(id) {
        await api.put(`http://localhost:3333/decks/${id}`, {
            name: deckEdited
        })

        setIsEdit(false)
        load()
    }

    function keyPressed(e) {
        if (e.key === 'Enter') {
            handleEdit(deck._id)
        }
    }

    //delete a deck
    async function handleDelete(id) {

        await api.delete(`http://localhost:3333/decks/${id}`)
            .then(
                alert('Sucesso, Deck deletado!')
            )
            .catch(error => {
                alert(error)
            })
        load()
    }

    // render 
    return (
        <li className="deck__item">
            {isEdit ?
                <span>
                    <form action="">
                        <input type="text" defaultValue={deck.name} onChange={(e) => handleEditChange(e)} onKeyPress={(e) => keyPressed(e)} />
                        <button type="button" onClick={() => handleEdit(deck._id)}>Editar</button>
                    </form>
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