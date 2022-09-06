/**
 * @param {Node} root1
 * @param {Node} root2
 * @returns {boolean}
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
  //Function to check if two trees are identical.
  isIdentical(root1, root2) {
    //your code here
    if (root1 === null && root2 === null) {
      return true;
    }

    if (root1 && !root2) {
      return false;
    }

    if (!root1 && root2) {
      return false;
    }

    let leftSide = this.isIdentical(root1.left, root2.left);
    let rightSide = this.isIdentical(root1.right, root2.right);
    let sameValue = root1.data === root2.data;

    if (leftSide && rightSide && sameValue) {
      return true;
    }
    return false;
  }
}
