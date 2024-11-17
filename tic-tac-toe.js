let board = ['', '', '', '', '', '', '', '', '']; 
let currentPlayer = 'X';
let gameOver = false;

function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.onclick = () => handleClick(index);
        boardElement.appendChild(cellElement);
    });
}

function handleClick(index) {
    if (gameOver || board[index]) return; 

    board[index] = currentPlayer;
    if (checkWinner()) {
        alert(currentPlayer + ' wins!');
        gameOver = true;
    } else if (board.every(cell => cell)) {
        alert('It\'s a draw!');
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    renderBoard();
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combo => {
        const [a, b, c] = combo;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
}

renderBoard();
