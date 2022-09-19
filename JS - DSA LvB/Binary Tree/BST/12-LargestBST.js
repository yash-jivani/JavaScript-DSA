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
 * @return {number}
*/

class NodeValue{
    maxNode;
    minNode;
    maxSize;
    constructor(minNode,maxNode,maxSize){
        this.minNode = minNode;
        this.maxNode = maxNode;
        this.maxSize = maxSize;
    }
}

class Solution {
    largestBSTSubTreeHelper(root){
        if(root === null){
            return new NodeValue(Infinity,-Infinity,0);
        }
        
        let left = this.largestBSTSubTreeHelper(root.left);
        let right = this.largestBSTSubTreeHelper(root.right);
        
        if(left.maxNode < root.key && root.key < right.minNode){
            return new NodeValue(Math.min(root.key,left.minNode), Math.max(root.key,right.maxNode),left.maxSize + right.maxSize + 1);
        }
        
        return new NodeValue(-Infinity, Infinity, Math.max(left.maxSize,right.maxSize));
    }
    
  	largestBst(root){
  		//code here
  		return this.largestBSTSubTreeHelper(root).maxSize;
  	}
}