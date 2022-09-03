function maze(row, col) {
  if (row === 1 || col === 1) {
    return 1;
  }

  let left = maze(row, col - 1);
  let right = maze(row - 1, col);

  return left + right;
}

console.log(maze(3, 3));    // 6 posible ways to reach (1,1) position to (3,3)
