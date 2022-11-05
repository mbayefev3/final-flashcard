import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { HomeButton } from '../homepagecomponent/DecksButton'
const AddCardTitle = ({ deckName, profile }) => {

    const { cardId, deckId } = useParams()
    const { url } = useRouteMatch()
    return (
        <div>
            <div className="card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>



                <Link to="/">
                    <HomeButton />
                </Link>
                {deckId && cardId ? <Link to={`/decks/${deckId}/cards/${cardId}/edit`}>   <p style={{ color: 'blue' }}>{deckName}</p></Link> :
                    <Link to={url}>   <p style={{ color: 'blue' }}>{deckName}</p></Link>}
                <p>{profile} {cardId}</p>

            </div>
            <div style={{ marginTop: '0.5rem' }}>
                <h3>{deckName}: {profile}</h3>
            </div>
        </div>
    )
}

export default AddCardTitle