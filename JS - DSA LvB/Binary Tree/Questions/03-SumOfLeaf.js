/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {Node} root
 * @returns {number}
 */

class Solution {
  sum(root) {
    if (!root) {
      return 0;
    }

    if (root.left === null && root.right === null) {
      return root.data;
    }

    return this.sum(root.left) + this.sum(root.right);
  }

  SumofLeafNodes(root) {
    //code here
    return this.sum(root);
  }
}
