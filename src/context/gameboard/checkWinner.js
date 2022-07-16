export const checkRow = (x, y, board) => {
    let point = 0, i = 1, j = 1;
    while (x + i < board.length) {
        if (board[x + i][y] === board[x][y]) point++;
        else break
    }

    while (x - j >= 0) {
        if (board[x - j][y] === board[x][y]) point++;
        else break
    }

    if (point >= 4) {
        // 5 consecutive position
        return true
    }

    return false;
}

export const checkColumn = (x, y, board) => {
    let point = 0, i = 1, j = 1;
    while (y + i < board.length) {
        if (board[x][y + i] === board[x][y]) point++;
        else break
    }

    while (y - j >= 0) {
        if (board[x][y - j] === board[x][y]) point++;
        else break
    }

    if (point >= 4) {
        // 5 consecutive position
        return true
    }

    return false;
}

export const checkLRDiagonal = (x, y, board) => {
    let point = 0;
    for (let i = 1; x + i < board.length && y + i < board.length; i++) {
        if (board[x][y] === board[x + i][y + i]) point++
        else break
    }

    for (let i = 1; x - i >= 0 && y - i >= 0; i++) {
        if (board[x][y] === board[x - i][y - i]) point++
        else break
    }

    if (point >= 4) {
        // 5 consecutive position
        return true
    }

    return false;
}

export const checkRLDiagonal = (x, y, board) => {
    let point = 0;
    for (let i = 1; x - i >= 0 && y + i < board.length; i++) {
        if (board[x][y] === board[x - i][y + i]) point++
        else break
    }

    for (let i = 1; x + i < board.length && y - i >= 0; i++) {
        if (board[x][y] === board[x + i][y - i]) point++
        else break
    }

    if (point >= 4) {
        // 5 consecutive position
        return true
    }

    return false;
}