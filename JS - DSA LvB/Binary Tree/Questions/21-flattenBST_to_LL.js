/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}

 * @param {Node} root
*/
class Solution {
  	flatten(root){
  		//code here
  		let curr = root;
  		while(curr !== null){
  		    if(curr.left){
  		        let pred = curr.left;
  		        while(pred.right){
  		            pred = pred.right;
  		        }
  		        pred.right = curr.right;
  		        curr.right = curr.left;
  		    }
  		    curr = curr.right;
  		}
  		
  		curr = root;
  		while(curr != null){
  		    curr.left = null;
  		    curr = curr.right;
  		}
  		return root;
  	}
}