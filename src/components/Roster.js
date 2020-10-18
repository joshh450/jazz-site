import React from 'react'
import playerData from '../playerData.json'

const Roster = () => {
    const mappedPlayers = playerData.players.map((player, i) => {
        return(
            <div className="roster-item" key={i}>
                <img className="roster-player-image" src={player.image} alt={player.name}/>
                <span>{player.name}</span>
                <span>{player.number}</span>
                <span>{player.position}</span>
                <span>{player.height}</span>
                <span>{player.weight}</span>
                <span>{player.from}</span>
                <span>{player.years}</span>
            </div>
        )
    })

    console.log(playerData.players.length);

    return (
        <div className="roster">
            {mappedPlayers}
        </div>
    )
}

export default Roster;
