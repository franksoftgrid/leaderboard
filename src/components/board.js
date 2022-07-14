import React from 'react'
import Profiles from './profiles';

export default function Board(props) {

    return (
        <div className="board">
            
            <Profiles Leaderboard={between(props.name)}></Profiles>

        </div>
    )
}



function between(data) {
    return data.sort((a, b) => {
        if (a.score === b.score) {
            return b.score - a.score;
        } else {
            return b.score - a.score;
        }
    })

}
