
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
 * @param {Node} root
 * @return {number[]}
*/
class Solution {
    //Return a list containing the preorder traversal of the given tree
  preOrder(root){
      //code here
      let ans = [];
      if(root===null){
          return ans;
      }
      let stack = [];
      stack.push(root);
      while(stack.length){
          let node = stack.pop();
          ans.push(node.key);
          if(node.right){
              stack.push(node.right);
          }
          if(node.left){
              stack.push(node.left);
          }
      }
      return ans;   
  }
}