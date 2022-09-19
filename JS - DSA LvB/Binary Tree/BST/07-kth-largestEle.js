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
 * @param {number} K
 * @return {number}
*/
class Solution {
	// return the Kth largest element in the given BST rooted at 'root'
	solve(root,ans){
	    if(root===null){
	        return ;
	    }
	    this.solve(root.left,ans);
	    ans.push(root.data);
	    this.solve(root.right,ans);
	}
  	kthLargest(root,K){
  		//code here
  		let ans = [];
  		this.solve(root,ans);
  		if(ans[ans.length-K]){
  		    return  ans[ans.length-K]
  		}else{
  		    return -1;
  		}
  	}
}