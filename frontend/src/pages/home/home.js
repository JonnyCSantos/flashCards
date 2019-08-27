import React from 'react'
import Header from '../../components/header/header'
import Decks from '../../components/decks/decks'

export default function Home() {
    return (
        <div>
            <Header />
            <main className="decks">
                <div className="container">
                    <div className="decks__wrapper">
                        <Decks />
                    </div>
                </div>
            </main>
        </div>
    )
}