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
 * @param {number} target
 * @return {number} 
*/
class Solution {
    
    inOrder(root,inOrderArr){
        if(root===null){
            return ;
        }
        this.inOrder(root.left,inOrderArr)
        inOrderArr.push(root.data);
        this.inOrder(root.right,inOrderArr)
    }
    
  	isPairPresent(root,target){
  		//code here
  		let inOrderArr = [];
  		this.inOrder(root,inOrderArr);
  		let i=0;
  		let j=inOrderArr.length-1;
  		while(i<j){
  		    let sum = inOrderArr[i] + inOrderArr[j]
  		    if(sum===target){
  		        return 1;
  		    }
  		    if(sum > target){
  		        j--;
  		    }
  		    if(sum < target){
  		        i++;
  		    }
  		}
  		return 0;
  		
  	}
}