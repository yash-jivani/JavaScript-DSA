/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
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
  //Function to return the lowest common ancestor in a Binary Tree.
  lca(root, n1, n2) {
    //your code here
    if (root === null) {
      return null;
    }

    if (root.data === n1 || root.data === n2) {
      return root;
    }

    let left = this.lca(root.left, n1, n2);
    let right = this.lca(root.right, n1, n2);

    if (left !== null && right !== null) {
      return root;
    }
    if (left !== null && right === null) {
      return left;
    }
    if (left === null && right !== null) {
      return right;
    }
    if (left === null && right === null) {
      return null;
    }
  }
}
