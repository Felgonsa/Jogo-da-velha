// iniciar o jogo com fogo e ao clicar, aparecer um simbolo, de forma alternada, e ao formar uma linha de 3
//mostrar um vencedor

let board = ['', '', '', '', '', '', '', '', '', ];
let playerTime = 0;
let gameOver = false
let velha = false
let names = [String.fromCodePoint(0x1F525), String.fromCodePoint(0x1F30A)]

let symbols = ['x', 'o']

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

function handLeMove(position) {

    if (gameOver) {
        return
    }

    if (board[position] == "") {

        board[position] = symbols[playerTime];

        gameOver = isWin()

        if (!gameOver) verifyVelha()

        if (gameOver == false) {

            playerTime = (playerTime == 0) ? 1 : 0

        }
    }

    return gameOver
}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {

        let sequence = winStates[i]

        let position0 = sequence[0]
        let position1 = sequence[1]
        let position2 = sequence[2]

        if (board[position0] == board[position1] &&
            board[position1] == board[position2] &&
            board[position0] != "") {

            return true
        }
    }

    return false
}

function verifyVelha() {
    let cont = 0

    board.forEach(item => {
        if (item != "") cont++
    })

    if (cont == board.length) {
        gameOver = true
        velha = true
    }
}