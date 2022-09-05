// User function Template for javascript

/**
 * @param {Node} root
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  // Function to return the diameter of a Binary Tree.

  height(root) {
    if (root === null) {
      return 0;
    }

    let left = this.height(root.left);
    let right = this.height(root.right);

    return Math.max(left, right) + 1;
  }

  diameter(root) {
    // your code here
    if (root === null) {
      return 0;
    }

    let leftSideExist = this.diameter(root.left);
    let rightSideExist = this.diameter(root.right);
    let bothSideExist = this.height(root.left) + this.height(root.right) + 1;

    let ans = Math.max(leftSideExist, rightSideExist, bothSideExist);
    return ans;
  }
}
