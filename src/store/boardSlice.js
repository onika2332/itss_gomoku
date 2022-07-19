import { createSlice } from '@reduxjs/toolkit';
import { checkRow, checkColumn, checkLRDiagonal, checkRLDiagonal } from '../context/gameboard/checkWinner';

/** 
 * Board lập ra sẽ khởi tạo là 1 bảng toàn -1, nếu người chơi và máy đánh vào sẽ đổi lượt là 0 hoặc 1
 * Ta tiến hành mapping như sau : 
 *  -1 --> "" ( ô chưa được tick )
 *  0 ---> "o" máy đánh
 *  1 ---> "x" người đánh
*/

export const INITIAL_BOARD = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];
const initialState = {
    board: INITIAL_BOARD,
    player: true, // người chơi có quyền đánh trước, nên đưa ra lựa chọn đánh trước/sau cho người chơi
    winner: -1,
};

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        edit: (state, action) => { // ok
            state.player ?
                state.board[action.payload.x][action.payload.y] += 2 :
                state.board[action.payload.x][action.payload.y] += 1
        },
        restart: (state) => {
            state = { ...initialState }
        },
        turn: state => { // ok
            state.player = !state.player
        },
        check: (state, action) => { // ok
            if (checkRow(action.payload.x, action.payload.y, state.board) ||
                checkColumn(action.payload.x, action.payload.y, state.board) ||
                checkLRDiagonal(action.payload.x, action.payload.y, state.board) ||
                checkRLDiagonal(action.payload.x, action.payload.y, state.board)
            ) {
                state.winner += state.player ? 2 : 1
            }
        },
    }
});

export const { edit, restart, turn, check } = boardSlice.actions;

export default boardSlice.reducer;