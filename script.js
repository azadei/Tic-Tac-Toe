const game = ['','','','','','','','','']
let player = 'X'

function checkWinner() {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    return winCombinations.some(combination => {
      const [a, b, c] = combination;
      return game[a] !== '' && game[a] === game[b] && game[a] === game[c]
    });
  } 
  
function makeMove(cellNum) {
    if (game[cellNum] === "" && !checkWinner()) {
      game[cellNum] = player
      if (player === 'X') {
         player = 'O';
      } else {
        player = "X"
      }
      updategame();
    }
  }
  
function updategame() {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < game.length; i++) {
    cells[i].textContent = game[i];
    
  }
}

const cells = document.querySelectorAll('.cell');
cells.forEach((cell, num) => {
  cell.addEventListener("click", () => makeMove(num));
});

function resetGame() {
  game.fill('')
  player = 'X'
  updategame()
}

const resetButton = document.getElementById('reset-button')
resetButton.addEventListener("click", resetGame)

resetGame()
