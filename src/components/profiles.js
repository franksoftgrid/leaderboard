import React from 'react'

export default function profiles({ Leaderboard }) {
    return (
        <ol>
            {Item(Leaderboard)}
        </ol>
    )
}

function Item(data) {
    return (
        <>
            {
                data.map((value, index) => (

                    <li key={index}>
                        <mark className='d-flex flex-row'>
                            <div>
                                <img className='img-fluid img-thumbnail img-profile' src={value.picture} alt="" />
                            </div>
                            <div className='ps-3'>
                                {value.displayName}
                            </div>
                        </mark>
                        <small>
                            {value.score}pt
                        </small>
                    </li>
                )
                )
            }
        </>
    )
}
