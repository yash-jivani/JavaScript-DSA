/**
 * @param {number[]} ino
 * @param {number[]} post
 * @param {number} n
 * @returns {Node}
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

class Solution 
{
    //Function to return a tree created from postorder and inoreder traversals.
    
    findPosition(inOrder,ele,size){
        for(let i=0;i<size;i++){
            if(inOrder[i]===ele){
                return i;
            }
        }
        return  -1;
    }
    
    solve(inorder,postorder,postorderIndex,inOrderStart,inOrderEnd,size){
        if(postorderIndex < 0 || inOrderStart > inOrderEnd){
            return null;
        }
        
        let ele = postorder[postorderIndex[0]--];
        let newNode = new Node(ele);
        let position = this.findPosition(inorder,ele,size);
        
        newNode.right = this.solve(inorder,postorder,postorderIndex,position+1,inOrderEnd,size);
        newNode.left = this.solve(inorder,postorder,postorderIndex,inOrderStart,position-1,size)
        return newNode;
    }   
    
    buildTree(ino, post, n)
    {
        //your code here
        let postIndex = [n-1];
        let inOrderStart= 0;
        let inOrderEnd = n-1;
        let ans = this.solve(ino,post,postIndex,inOrderStart,inOrderEnd,n);
        return  ans;
    }
}