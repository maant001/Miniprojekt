// variables
let rows = 6
let columns = 7
let state = {

}
let currentPlayer = "red"
let board


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

// TODO
function showBoard() {
    const board = elt("div", {class: "board"})

    for (let row = 0; row < 6; row++) {
        const row = elt("div", {class: "row"})
        for (let col = 0; col < 7; col++) {
            const field = elt("div", {class: "field"})

            row.appendChild(field)
        }
        board.appendChild(row)
    }
    document.body.appendChild(board)
}

/* TODO 2 Timer*/
// function timerRandomizer() {
//
// }

/* TODO 2 Create EmptyBoard, this gives state of board!*/
function createEmptyBoard() {
     let state = Array(6).fill('').map(el => Array(7).fill(''))
     /*document.body.appendChild(state)*/
     randomizeField(state)
     console.log(state)
 }

/* TODO 2*/
 function randomizeField(currentBoard) {
     for (let row in currentBoard) {
         for (let field in row) {
             if (Math.random() < 0.5) {
                 if (Math.random() < 0.5) {
                     currentBoard[row][field] = "b"
                 } else {
                     currentBoard[row][field] = "r"
                 }
             }
         }
     }
 }


/* TODO 2 calling the functions, testing purposes here*/
createEmptyBoard()
showBoard()
document.getElementsByClassName("board")[0].appendChild(elt("div", {id: "container"}, currentPlayer + " now playing"))
console.log("test")