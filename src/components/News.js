import React from 'react'
import teamData from '../teamData.json'

const News = ({ mode }) => {
    const mappedPlayers = teamData.players.map((player, i) => {
        return(
            <div className="roster-item" key={i}>
                <img className="player-image" src={player.image} alt={player.name}/>
                <span className="player-name">{player.name}</span>
                <span className={`player-number ${mode}-text-accent`}>{player.number}</span>
                <span className="player-position">{player.position}</span>
                <span className="player-height">{player.height}</span>
            </div>
        )
    })

    return (
        <div className="roster">
            <h3 className={`section-header ${mode}-text-accent`}>News</h3>
            {mappedPlayers}
        </div>
    )
}

export default News