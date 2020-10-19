import React from 'react'
import teamData from '../teamData.json'

const Schedule = ({ mode }) => {
    const mappedSchedule = teamData.schedule.map((game, i) => {
        return(
            <div className="schedule-item" key={i}>
                <img className="schedule-image" src={game.againstImage} alt={game.against}/>
                <span className="schedule-name">{game.against}</span>
                <span className={`schedule-outcome ${game.outcome}-outcome`}>{game.outcome}</span>
                <span className="schedule-date">{game.date}</span>
                <span className="schedule-time">{game.time}</span>
                <span className={`schedule-score ${mode}-text-accent`}>{game.score}</span>
            </div>
        )
    })

    return (
        <section>
            <h3 className={`section-header ${mode}-text-accent`}>Schedule</h3>
            {mappedSchedule}
        </section>
    )
}

export default Schedule
