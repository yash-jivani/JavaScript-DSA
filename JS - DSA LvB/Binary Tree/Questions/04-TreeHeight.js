//User function Template for javascript

/**
 * @param {Node} node
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this .data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  //Function to find the height of a binary tree.
  height(node) {
    //your code here
    if (!node) {
      return 0;
    }

    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right);
    let ans = Math.max(leftHeight, rightHeight) + 1;
    return ans;
  }
}
