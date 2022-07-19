import md5 from 'md5';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cell from '../cell/Cell'
import GameMaster from '../master/GameMaster';
import "./Board.css"

function Board() {
    const navigate = useNavigate();
    const board = useSelector((state) => state.board.board);

    return (
        <>
            <button className="exit-btn" onClick={() => navigate('/home')}>EXIT</button>
            <GameMaster />
            <div className='grid-container'>
                {
                    board.map((row, i) => {
                        return row.map((cell, j) => {
                            return <Cell
                                x={i}
                                y={j}
                                value={cell}
                                key={md5(10 * i + j)}
                            />
                        })
                    })
                }
            </div>
        </>
    )
}

export default Board