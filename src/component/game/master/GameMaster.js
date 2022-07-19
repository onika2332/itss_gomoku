import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restart } from '../../../store/boardSlice';

function GameMaster() {
    const winner = useSelector(
        state => state.board.winner
    )

    return (
        <div className='game-master'>
            {
                winner === -1 ?
                    "Now, your turn" :
                    (winner === 0 ?
                        "You loose. Try again?" :
                        "You win. Want to play more?"
                    )
            }
        </div>
    )
}

export default GameMaster