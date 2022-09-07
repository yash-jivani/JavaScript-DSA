//User function Template for javascript

/**
 * @param {Node} root
 * @returns {number[]}
 */

class Solution {
  //Function to return a list containing the bottom view of the given tree.
  bottomView(root) {
    //your code here
    if (root === null) {
      return;
    }

    let q = [];
    let map = {};
    let horizontalDistance = 0;
    root.horizontalDistance = horizontalDistance;
    q.push(root);

    while (q.length !== 0) {
      root = q.shift();
      horizontalDistance = root.horizontalDistance;
      map[horizontalDistance] = root.data;

      if (root.left) {
        root.left.horizontalDistance = horizontalDistance - 1;
        q.push(root.left);
      }

      if (root.right) {
        root.right.horizontalDistance = horizontalDistance + 1;
        q.push(root.right);
      }
      // q.shift()
    }
    let arr = Array.from(Object.entries(map));
    arr.sort(function (a, b) {
      return a[0] - b[0];
    });
    let ans = arr.map((subArr) => subArr[1]);
    return [...ans];
  }
}
