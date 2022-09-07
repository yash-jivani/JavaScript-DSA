/**
 * @param {Node} root
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
  solve(root, ans, level) {
    if (root === null) {
      return;
    }

    if (ans.length === level) {
      ans.push(root.data);
    }

    this.solve(root.right, ans, level + 1);
    this.solve(root.left, ans, level + 1);
  }

  rightView(root) {
    //your code here

    let level = 0;
    let ans = [];
    this.solve(root, ans, level);
    return [...ans];
  }
}
