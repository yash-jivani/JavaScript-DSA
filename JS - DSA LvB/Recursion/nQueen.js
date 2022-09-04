function nQueens(board, row) {
  if (row === board.length) {
    displayBoard(board);
    console.log();
    return 1;
  }

  let count = 0;
  // check for all rows and cols.
  for (let col = 0; col < board.length; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = true;
      count += nQueens(board, row + 1);
      board[row][col] = false;
    }
  }
  return count;
}

function isSafe(board, row, col) {
  // check vertically
  for (let i = 0; i < row; i++) {
    if (board[i][col] === true) {
      return false;
    }
  }
  // check left diagonal
  let maxLeft = Math.min(row, col);
  for (let i = 1; i <= maxLeft; i++) {
    if (board[row - i][col - i] === true) {
      return false;
    }
  }
  // check right diagonal
  let maxRight = Math.min(row, board.length - col - 1);
  for (let i = 1; i <= maxRight; i++) {
    if (board[row - i][col + i]) {
      return false;
    }
  }
  return true;
}

function displayBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === true) {
        process.stdout.write(`Q `);
      } else {
        process.stdout.write(`X `);
      }
    }
    console.log();
  }
}

let myBoard = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

console.log(nQueens(myBoard, 0));
