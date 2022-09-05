//User function Template for javascript

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
  nonLeafCounter(root) {
    //if(root===null  ){
    //  return 0;
    //}

    if (root === null || (!root.left && !root.right)) {
      return 0;
    }

    return 1 + this.nonLeafCounter(root.left) + this.nonLeafCounter(root.right);
  }

  countNonLeafNodes(root) {
    //your code here
    return this.nonLeafCounter(root);
  }
}
