import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { HomeButton, StudyButton, EditButton, AddCardsButton, DeleteButton } from '../homepagecomponent/DecksButton'
import { Link } from 'react-router-dom'

const DeckScreenTitleAndButtons = ({ name, description, deckId, handleDeleteDeck }) => {
    const { url } = useRouteMatch()
    // ()
    return (
        <div>

            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/">
                    <HomeButton />

                </Link>
                <Link to={url}>
                    <p style={{ color: 'blue' }}>{name}</p>


                </Link>
            </div>

            <div className="card-body" >
                <p className="card-text">{description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/decks/${deckId}/edit`}>

                        <EditButton />
                    </Link>
                    <Link to={`/decks/${deckId}/study`}>
                        <StudyButton />

                    </Link>
                    <Link to={`/decks/${deckId}/cards/new`} >
                        <AddCardsButton />
                    </Link>


                    <DeleteButton deckId={deckId} handleDeleteDeck={handleDeleteDeck} />

                </div>

            </div>

        </div>
    )
}


export default DeckScreenTitleAndButtons