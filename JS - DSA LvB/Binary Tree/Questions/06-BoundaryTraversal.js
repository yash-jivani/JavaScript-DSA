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
 * @returns {number[]}
 */

class Solution {
  leftSide(root, ans) {
    if (root === null || (root.left === null && root.right === null)) {
      return;
    }
    ans.push(root.data);
    if (root.left) {
      this.leftSide(root.left, ans);
    } else {
      this.leftSide(root.right, ans);
    }
  }

  leafes(root, ans) {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      ans.push(root.data);
      return;
    }

    this.leafes(root.left, ans);
    this.leafes(root.right, ans);
  }

  rightSide(root, ans) {
    if (root === null || (root.left === null && root.right === null)) {
      return;
    }
    if (root.right) {
      this.rightSide(root.right, ans);
    } else {
      this.rightSide(root.left, ans);
    }
    ans.push(root.data);
  }

  boundary(root) {
    //your goes code here

    let ans = [];
    if (root === null) {
      return ans;
    }

    ans.push(root.data);
    this.leftSide(root.left, ans);
    this.leafes(root.left, ans);
    this.leafes(root.right, ans);
    this.rightSide(root.right, ans);

    return ans;
  }
}
