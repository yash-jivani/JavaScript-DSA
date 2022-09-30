
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


// solution 1 >>>>>>>>>>>>>>>>>>>

class Solution1 {
  	//Return a list containing the inorder traversal of the given tree
    inOrder(root){
    	//code here
    	let node  = root;
    	let stack = [];
    	let ans = [];
    	while(true){
    	    if(node !== null){
    	        stack.push(node);
    	        node = node.left;
    	    }
    	    else{
    	        if(stack.length === 0) break;
    	        node = stack.pop();
    	        ans.push(node.key);
    	        node = node.right;
    	    }
    	}
    	return ans;
    }
}

// solution 2 >>>>>>>>>>>>>>>>>>>
class Solution2 {
    //Return a list containing the inorder traversal of the given tree
  inOrder(root){
      //code here
      let ans = [];
      let stack = [];
      if(root === null){
          return ans;
      }
      let node = root;
      while(stack.length > 0 || node !== null){
          while(node!==null){
              stack.push(node)
              node = node.left;
          }
          
          node = stack.pop();
          ans.push(node.key);
          node = node.right;
      }
      return ans;
  }
}