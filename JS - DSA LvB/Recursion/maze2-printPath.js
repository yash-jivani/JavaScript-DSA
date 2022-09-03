function mazePath(row, col, ans = "") {
  if (row === 1 && col === 1) {
    console.log(ans);
    return;
  }

  if (row > 1) {
    mazePath(row - 1, col, ans + "D");
  }
  if (col > 1) {
    mazePath(row, col - 1, ans + "R");
  }
}

mazePath(3, 3);
