export const INITIAL_BOARD = {
    board: [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ],
    player: true
}

export const BoardReducer = (state, action) => {
    switch (action.type) {
        case "EDIT":
            return {
                ...state,
                board: action.payload.board
            }
        case "RESTART":
            return {
                board: INITIAL_BOARD.board,
                player: INITIAL_BOARD.player
            }
        case "SWITCH":
            return {
                ...state,
                player: action.payload
            }
        default:
            return state;
    }
}

export const editBoard = (board, x, y, value) => {
    board[x][y] = value;
    return board;
}

export default BoardReducer;