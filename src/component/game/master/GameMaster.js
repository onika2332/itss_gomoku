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
                    "あなたの番です。" :
                    (winner === 0 ?
                        "あなたの負けです。" :
                        "あなたの勝ちです。"
                    )
            }
        </div>
    )
}

export default GameMaster