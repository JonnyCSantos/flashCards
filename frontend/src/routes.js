import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Decks from './pages/decks/decks'

export default function Routes () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Decks}/>
        </BrowserRouter>
    )
}