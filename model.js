// variables
let rows = 6
let columns = 7
let state = {
    board: [],
    currentPlayer: ""
}

let board = undefined

//functions
function elt(type, attrs, ...children) {
    let node = document.createElement(type)
    for (a in attrs) {
        node.setAttribute(a, attrs[a])
    }
    for (let child of children) {
        if (typeof child != "string") {
            node.appendChild(child)
        } else {
            node.appendChild(document.createTextNode(child))
        }
    }
    return node
}

function showBoard() {
    const rows = state.board.map((row, i) => {
        const fields = row.map((field, j) => {
            const fieldElement = elt("div", {"class": "field", "data-row": i, "data-col": j})
            if (field !== "" && "rb".includes(field)) {
                let colorClass;
                if (field === "r") {
                    colorClass = "red";
                } else {
                    colorClass = "blue";
                }
                const piece = elt("div", {class: colorClass + " piece", style: "z-index:-1"})
                fieldElement.appendChild(piece)
            }
            return fieldElement
        })
        return elt("div", {class: "row"}, ...fields)
    })

    // TODO mistake happens here i think
    //board.delete(...rows)

    board.innerHTML = ""
    board.append(...rows)

    //board.set(...rows)
}

function createEmptyBoard() {
     for (const el of Array(rows).fill('')) {
         state.board.push(Array(columns).fill(''));
     }
     if (Math.random() < 0.5) {
        state.currentPlayer = "red"
     } else {
        state.currentPlayer = "blue"
     }
     console.log(state)
}

function showCurrentPlayer() {
    document.getElementById("currentPlayer").innerHTML = state.currentPlayer;
}

// TODO change
function actionOnClick(row, col) {
    if (state.board[row][col] !== "") {
        return;
    }
    for (let i = state.board.length - 1; i >= 0; i--) {
        if (state.board[i][col] === "") {
            state.board[i][col] = state.currentPlayer[0];
            break;
        }
    }
    changePlayer()
    showCurrentPlayer();
    showBoard();
}

function changePlayer() {
    if (state.currentPlayer === "blue") {
        state.currentPlayer = "red"
    } else {
        state.currentPlayer = "blue"
    }
    showCurrentPlayer()

}

function startGame() {
    board = document.getElementsByClassName("board")[0]
    createEmptyBoard()
    showBoard()
    showCurrentPlayer()
}

// TODO document or window?
window.addEventListener('DOMContentLoaded', () => {
    startGame()
    document.body.addEventListener("click", () => {
        if ("field,piece".includes(event.target.classList)) {
            const row = event.target.dataset.row
            const col = event.target.dataset.col
            actionOnClick(row, col)

            let playerToCheck
            if (state.currentPlayer[0] === 'r') {
                playerToCheck = "blue"
            } else {
                playerToCheck = "red"
            }

            if (connect4Winner(playerToCheck[0], state.board)) {
                alert(playerToCheck + " WON :)")
                window.location.reload()
            }
        }
    })
})

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