//User function Template for javascript

/**
 * @param {number[][]} m
 * @param {number} n
 * @return {string[]}
 */

class Solution {
  // Function returns true if the
  // move taken is valid else
  // it will return false.
  isSafe(row, col, m, n, visited) {
    if (
      row == -1 ||
      row == n ||
      col == -1 ||
      col == n ||
      visited[row][col] ||
      m[row][col] == 0
    )
      return false;

    return true;
  }

  // Function to print all the possible
  // paths from (0, 0) to (n-1, n-1).
  printPathUtil(row, col, m, n, visited, path, possiblePaths) {
    // This will check the initial point
    // (i.e. (0, 0)) to start the paths.
    if (
      row == -1 ||
      row == n ||
      col == -1 ||
      col == n ||
      visited[row][col] ||
      m[row][col] == 0
    )
      return;

    // If reach the last cell (n-1, n-1)
    // then store the path and return
    if (row == n - 1 && col == n - 1) {
      possiblePaths.push(path);
      return;
    }

    // Mark the cell as visited
    visited[row][col] = true;

    // Try for all the 4 directions (down, left,
    // right, up) in the given order to get the
    // paths in lexicographical order

    // Check if downward move is valid
    if (this.isSafe(row + 1, col, m, n, visited)) {
      path += "D";
      this.printPathUtil(row + 1, col, m, n, visited, path, possiblePaths);
      path = path.substring(0, path.length - 1);
    }

    // Check if the left move is valid
    if (this.isSafe(row, col - 1, m, n, visited)) {
      path += "L";
      this.printPathUtil(row, col - 1, m, n, visited, path, possiblePaths);
      path = path.substring(0, path.length - 1);
    }

    // Check if the right move is valid
    if (this.isSafe(row, col + 1, m, n, visited)) {
      path += "R";
      this.printPathUtil(row, col + 1, m, n, visited, path, possiblePaths);
      path = path.substring(0, path.length - 1);
    }

    // Check if the upper move is valid
    if (this.isSafe(row - 1, col, m, n, visited)) {
      path += "U";
      this.printPathUtil(row - 1, col, m, n, visited, path, possiblePaths);
      path = path.substring(0, path.length - 1);
    }

    // Mark the cell as unvisited for
    // other possible paths
    visited[row][col] = false;
  }

  // Function to store and print
  // all the valid paths
  findPath(m, n) {
    let possiblePaths = [];
    let path = "";
    let MAX = 5;
    let visited = new Array(n);
    for (let i = 0; i < n; i++) {
      visited[i] = new Array(MAX);
      for (let j = 0; j < MAX; j++) visited[i][j] = false;
    }

    // Call the utility function to
    // find the valid paths
    this.printPathUtil(0, 0, m, n, visited, path, possiblePaths);

    // Print all possible paths
    return possiblePaths;
  }
}
