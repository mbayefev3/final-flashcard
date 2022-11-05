import React, { useEffect, useState } from 'react'
import { listDecks, deleteDeck } from "../../../utils/api";
import Decks from './Decks';
import { Link } from 'react-router-dom'
import { CreateDeckButton } from './DecksButton';
const HomePage = () => {

    const [availableDecks, setAvailableDecks] = useState([])


    useEffect(() => {

        const loadDecks = async () => {
            const decks = await listDecks()
            setAvailableDecks([...decks])
        }
        loadDecks()
    }, [])



    const handleDeleteDeck = async (deckId) => {

        if (window.confirm("Delete this deck?\n\n You will not be able to recover it.")) {

            await deleteDeck(deckId) //this will return {}
            const undeletedDecks = await listDecks()
            setAvailableDecks([...undeletedDecks])


        }

    }

    return (
        <div>
            <Link to="/decks/new">
                < CreateDeckButton />
            </Link>
            <Decks availableDecks={availableDecks} handleDeleteDeck={handleDeleteDeck} />
        </div>
    )
}

export default HomePage