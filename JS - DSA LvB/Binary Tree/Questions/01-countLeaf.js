//User function Template for javascript

/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */
/* Should return count of leaves. For example, return
    value should be 2 for following tree.
         10
      /      \ 
   20       30 */

class Solution {
  getLeafCount(node) {
    if (node == null) return 0;
    if (node.left == null && node.right == null) return 1;
    else return this.getLeafCount(node.left) + this.getLeafCount(node.right);
  }

  countLeaves(root) {
    //code here
    // let count = 0;
    let ans = this.getLeafCount(root);
    return ans;
  }
}
