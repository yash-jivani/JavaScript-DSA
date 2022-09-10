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
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @param {number} n
 * @return {Node}
*/
class Solution {
    
    findPosition(inOrder,ele,size){
        for(let i=0;i<size;i++){
            if(inOrder[i]===ele){
                return i;
            }
        }
        return -1;
    }
    solve(inOrder,preOrder,preOrderIndex,inOrderStartingIndex,inOrderEndingIndex,size){
        if(preOrderIndex >= size || inOrderStartingIndex > inOrderEndingIndex){
            return null;
        }
        
        let element  = preOrder[preOrderIndex[0]++];
        let newNode = new Node(element);
        let position  = this.findPosition(inOrder,element,size);
        
        newNode.left  = this.solve(inOrder,preOrder,preOrderIndex,inOrderStartingIndex,position-1,size)
        newNode.right  = this.solve(inOrder,preOrder,preOrderIndex,position+1,inOrderEndingIndex,size)
        
        return newNode;
    }
    
  	buildTree(inorder,preorder,n){
  		//code here
  		let preOrderIndex  = [0];
  		let inOrderStartingIndex  = 0;
  		let inOrderEndingIndex = n-1;
  		
  		let ans  = this.solve(inorder,preorder,preOrderIndex,inOrderStartingIndex,inOrderEndingIndex,n)
  	    return ans;
  	    
  	}
}