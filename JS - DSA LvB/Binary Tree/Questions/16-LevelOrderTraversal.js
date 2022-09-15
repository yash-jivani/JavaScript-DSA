//User function Template for javascript

/**
 * @param {Node} node
 * @returns {number[]}
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
  //Function to return the level order traversal of a tree.
  levelOrder(node) {
    //your code here
    let root = node;
    let ans = [];
    if (root === null) {
      return ans;
    }

    let q = [];
    q.push(root);
    while (q.length) {
      let size = q.length;
      let currentLevelNodes = [];
      for (let i = 0; i < size; i++) {
        let currentNode = q.shift();
        if (currentNode.left) {
          q.push(currentNode.left);
        }
        if (currentNode.right) {
          q.push(currentNode.right);
        }
        ans.push(currentNode.data);
      }
    //   ans.push(...currentLevelNodes);
    }
    return ans;
  }
}
