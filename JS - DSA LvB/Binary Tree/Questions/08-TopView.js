//User function Template for javascript

/**
 * @param {Node} root
 */
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    if (root === null) {
      return;
    }

    let q = [];
    let map = new Map();
    let horizontalDistance = 0;
    root.horizontalDistance = horizontalDistance;
    q.push(root);

    while (q.length !== 0) {
      root = q[0];
      horizontalDistance = root.horizontalDistance;
      if (!map.has(horizontalDistance)) {
        map.set(horizontalDistance, root.data);
      }

      if (root.left) {
        root.left.horizontalDistance = horizontalDistance - 1;
        q.push(root.left);
      }

      if (root.right) {
        root.right.horizontalDistance = horizontalDistance + 1;
        q.push(root.right);
      }
      q.shift();
    }

    let arr = Array.from(map);
    arr.sort(function (a, b) {
      return a[0] - b[0];
    });
    let ans = arr.map((subArr) => subArr[1]);
    return [...ans];
  }
}
