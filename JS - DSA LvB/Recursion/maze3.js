function mazeHorizontalVerticalDiagonal(row, col, ans = "", count = 0) {
  if (row === 1 && col === 1) {
    console.log(ans);
    count++;
    return count;
  }
  if (row > 1 && col > 1) {
    count = mazeHorizontalVerticalDiagonal(row - 1, col - 1, ans + "D", count);
  }
  if (row > 1) {
    count = mazeHorizontalVerticalDiagonal(row - 1, col, ans + "V", count);
  }
  if (col > 1) {
    count = mazeHorizontalVerticalDiagonal(row, col - 1, ans + "H", count);
  }
  return count;
}
console.log("Total ways : ", mazeHorizontalVerticalDiagonal(3, 3));
