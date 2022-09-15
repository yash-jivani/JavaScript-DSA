
/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} node
 * @return {number[]}
*/
class Solution {
    //Return a list containing the postorder traversal of the given tree
  postOrder(root){
      //code here
      let ans = [];
      if(root === null){
          return ans;
      }
      let stack1 = [];
      let stack2 = [];
      stack1.push(root);
      while(stack1.length){
          root = stack1.pop();
          stack2.push(root);
          if(root.left){
              stack1.push(root.left);
          }
          if(root.right){
              stack1.push(root.right);
          }
      }
      while(stack2.length){
          ans.push(stack2.pop().key);
      }
      return ans;
  }
}