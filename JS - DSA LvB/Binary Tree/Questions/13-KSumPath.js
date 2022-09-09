class Solution {
  solve(root, K, count, path) {
    if (root === null) {
      return;
    }
    path.push(root.data);

    this.solve(root.left, K, count, path);
    this.solve(root.right, K, count, path);

    // let size = path.length;
    let sum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if (sum === K) {
        count[0] = count[0] + 1;
      }
    }
    path.pop();
  }

  sumK(root, K) {
    //code here
    let path = [];
    let count = [0];
    this.solve(root, K, count, path);
    return count[0];
  }
}
