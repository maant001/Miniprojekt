/* TODO Aufgabe 2*/
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
    const board = elt("div", {class: "board"})

    for (let row = 0; row < 6; row++) {
        const row = elt("div", {class: "row"})
        for (let col = 0; col < 7; col++) {
            const field = elt("div", {class: "field"})

            if (Math.random() < 0.2) {
                field.classList.add("piece")

                if (Math.random() < 0.5) {
                    field.classList.add("blue")
                } else {
                    field.classList.add("red")
                }
            }
            row.appendChild(field)
        }
        board.appendChild(row)
    }
    document.body.appendChild(board)
}

/* TODO 2 Timer*/
function timerRandomizer() {

}

/* TODO 2 Create EmptyBoard, this gives state of board!*/
function createEmptyBoard() {
    let state = Array(6).fill('').map(el => Array(7).fill(''))
    /*document.body.appendChild(state)*/
    console.log(state)
}


createEmptyBoard()
showBoard()