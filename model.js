// variables
let rows = 6
let columns = 7
let state = {
    board: [],
    currentPlayer: ""
}

//let board = undefined


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
    board.innerHTML = ""
    board.append(...rows)
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

window.addEventListener('DOMContentLoaded', () => {
    startGame()
    document.body.addEventListener("click", () => {
        if ("field,piece".includes(event.target.classList)) {
            const row = event.target.dataset.row
            const col = event.target.dataset.col
            actionOnClick(row, col)
        }
    });

    document.getElementById("newGameButton").addEventListener("click", () => {
        createEmptyBoard()
        showBoard()
        showCurrentPlayer()
    })

})