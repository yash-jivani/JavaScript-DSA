function allDirection(row, col, maze, ans = "") {
  if (row === maze.length - 1 && col === maze[0].length - 1) {
    console.log(ans);
    return;
  }

  // if cell is already visited thn don't visit
  if (maze[row][col] === false) {
    return;
  }

  // mark as visited
  maze[row][col] = false;

  if (row < maze.length - 1) {
    allDirection(row + 1, col, maze, ans + "D");
  }

  if (col < maze[0].length - 1) {
    allDirection(row, col + 1, maze, ans + "R");
  }

  if (row > 0) {
    allDirection(row - 1, col, maze, ans + "U");
  }

  if (col > 0) {
    allDirection(row, col - 1, maze, ans + "L");
  }

  // mark as unvisited when return
  maze[row][col] = true;
}

let myMaze = [
  [true, true, true],
  [true, true, true],
  [true, true, true],
];

allDirection(0, 0, myMaze);
