import { INITIAL_BOARD } from '../../../context/gameboard/BoardReducer';
import Cell from '../cell/Cell'
import "./Board.css"

function Board() {
    return (
        <div className='grid-container'>
            {
                INITIAL_BOARD.board.map((row, i) => {
                    return row.map((cell, j) => {
                        return <Cell x={i} y={j} />
                    })
                })
            }
        </div>
    )
}

export default Board