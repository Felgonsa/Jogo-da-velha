let player

playerTime == 0 ? player = "fogo" : player = "água"

document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})



function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handLeMove(position)) {

        setTimeout(() => {
            if (velha) {
                alert("O jogo deu Velha!!")
            } else {


                alert("O jogo foi encerrado e " + names[playerTime] + " foi o vencedor")
            }

        }, 350)

    }
    updateSquares(position)


}

function updateSquares(position) {
    let turn = document.getElementById("turn")
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`


    if (gameOver == false) {
        turn.innerHTML = `É a vez de ${names[playerTime]} `

    } else if (gameOver == true && velha == false) {
        turn.innerHTML = `o vencedor foi ${names[playerTime]}`
    } else if (velha == true) {
        turn.innerHTML = "velha!!"
    }

}

function restart() {
    board = ['', '', '', '', '', '', '', '', '', ];
    playerTime = 0;
    gameOver = false
    velha = false
    turn.innerHTML = ""

    document.querySelectorAll(".square").forEach(square => square.innerHTML = "")


}