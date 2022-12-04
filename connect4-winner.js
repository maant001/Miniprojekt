// WBE P 10
// A2

function connect4Winner(playerToCheck, testBoard) {
    let bool = false
    if (!checkHorizontal(playerToCheck, testBoard)) {
        if (!checkVertical(playerToCheck, testBoard)) {
            if (!checkDiagonalRight(playerToCheck, testBoard)) {
                if (!checkDiagonalLeft(playerToCheck, testBoard)) {
                    bool = false
                } else {
                    bool = true
                }
            } else {
                bool = true
            }
        } else {
            bool = true
        }
    } else {
        bool = true
    }
    return bool

    // checks from left to right
    // for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    //     for (let columnIndex = 0; columnIndex < board[rowIndex].length - 3; columnIndex++) {
    //         if (board[rowIndex][columnIndex] === player) {
    //             if (board[rowIndex][columnIndex + 1] === player) {
    //                 if (board[rowIndex][columnIndex + 2] === player) {
    //                     if (board[rowIndex][columnIndex + 3] === player) {
    //                         return true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    //
    // // check from up to down
    // for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
    //     for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
    //         if (board[rowIndex][columnIndex] === player) {
    //             if (board[rowIndex + 1][columnIndex] === player) {
    //                 if (board[rowIndex + 2][columnIndex] === player) {
    //                     if (board[rowIndex + 3][columnIndex] === player) {
    //                         return true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    //
    // // checks diagonal right
    // for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
    //     for (let columnIndex = 0; columnIndex < board[rowIndex].length - 3; columnIndex++) {
    //         if (board[rowIndex][columnIndex] === player) {
    //             if (board[rowIndex + 1][columnIndex + 1] === player) {
    //                 if (board[rowIndex + 2][columnIndex + 2] === player) {
    //                     if (board[rowIndex + 3][columnIndex + 3] === player) {
    //                         return true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    //
    // // check diagonal left
    // for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
    //     for (let columnIndex = 3; columnIndex < board[rowIndex].length; columnIndex++) {
    //         if (board[rowIndex][columnIndex] === player) {
    //             if (board[rowIndex + 1][columnIndex - 1] === player) {
    //                 if (board[rowIndex + 2][columnIndex - 2] === player) {
    //                     if (board[rowIndex + 3][columnIndex - 3] === player) {
    //                         return true
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    //
    // return false
}


// checks from left to right
function checkHorizontal(player, board) {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length - 3; columnIndex++) {
            if (board[rowIndex][columnIndex] === player) {
                if (board[rowIndex][columnIndex + 1] === player) {
                    if (board[rowIndex][columnIndex + 2] === player) {
                        if (board[rowIndex][columnIndex + 3] === player) {
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}

// check from up to down
function checkVertical(player, board) {
    for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            if (board[rowIndex][columnIndex] === player) {
                if (board[rowIndex + 1][columnIndex] === player) {
                    if (board[rowIndex + 2][columnIndex] === player) {
                        if (board[rowIndex + 3][columnIndex] === player) {
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}

// checks diagonal right
function checkDiagonalRight(player, board) {
    for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < board[rowIndex].length - 3; columnIndex++) {
            if (board[rowIndex][columnIndex] === player) {
                if (board[rowIndex + 1][columnIndex + 1] === player) {
                    if (board[rowIndex + 2][columnIndex + 2] === player) {
                        if (board[rowIndex + 3][columnIndex + 3] === player) {
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}

// check diagonal left
function checkDiagonalLeft(player, board) {
    for (let rowIndex = 0; rowIndex < board.length - 3; rowIndex++) {
        for (let columnIndex = 3; columnIndex < board[rowIndex].length; columnIndex++) {
            if (board[rowIndex][columnIndex] === player) {
                if (board[rowIndex + 1][columnIndex - 1] === player) {
                    if (board[rowIndex + 2][columnIndex - 2] === player) {
                        if (board[rowIndex + 3][columnIndex - 3] === player) {
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}

let testBoard = [
    ['_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', 'r', '_', '_'],
    ['_', '_', '_', 'r', 'r', 'b', 'b'],
    ['_', '_', 'r', 'b', 'r', 'r', 'b'],
    ['b', 'b', 'b', 'r', 'r', 'b', 'b']
]
console.log(connect4Winner('r', testBoard)) // true, da 4 x 'r' in einer Reihe
console.log(connect4Winner('b', testBoard)) // false

module.exports = { connect4Winner }