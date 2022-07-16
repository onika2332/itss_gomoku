import React, { useContext, useState } from 'react';
import { BoardContext } from '../../../context/gameboard/BoardContext';
import { editBoard } from '../../../context/gameboard/BoardReducer';
import { checkColumn, checkLRDiagonal, checkRLDiagonal, checkRow } from '../../../context/gameboard/checkWinner';
import "./Cell.css";


function Cell({ x, y }) {
    const { board, player, dispatch } = useContext(BoardContext);
    const [value, setValue] = useState("");

    const toggleCell = (e) => {
        // haven't value yet
        if (value === "") {
            setValue(player ? "x" : "o");

            dispatch({
                type: "EDIT",
                payload: {
                    board: editBoard(board, x, y, player)
                }
            });


            if (checkRow(x, y, board) ||
                checkColumn(x, y, board) ||
                checkLRDiagonal(x, y, board) ||
                checkRLDiagonal(x, y, board)
            ) { // have a winner
                setTimeout(() => {
                    player ?
                        alert("You are winner") :
                        alert("You are looser");
                }, 100);

                dispatch({
                    type: "RESTART"
                });
            }

            dispatch({
                type: "SWITCH",
                payload: !player
            });
        }
    }
    return (
        <div className="grid-item" onClick={toggleCell}>{value}</div>
    )
}

export default Cell;