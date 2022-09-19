class Solution 
{
    //Function to check whether a Binary Tree is BST or not.
    
    solve(root,minVal,maxVal){
        if(root === null){
            return true;
        }
        if(root.data < minVal || root.data > maxVal) {
            return false;
        }
        
        return this.solve(root.left,minVal,root.data) && this.solve(root.right,root.data,maxVal);
    }
    
    isBST(root)
    {
        //your code here
        return  this.solve(root,-Infinity,Infinity);
    }
}