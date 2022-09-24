
class Solution {

    countNodes(root){
        if(root===null){
            return 0;
        }
        let ans = 1 + this.countNodes(root.left) + this.countNodes(root.right);
        return ans;
        
    }
    
    isBST(root,index,totalCount){
        if(root===null){
            return true;
        }
        if(totalCount <= index){
            return false;
        }
        else{
            let left = this.isBST(root.left, 2*index+1, totalCount)
            let right = this.isBST(root.right, 2*index+2, totalCount)
            return (left && right);
            
        }
    }

    isMaxHeap(root){
        
        if(root === null){
            return true;
        }
        if(root.left === null && root.right === null){
            return true;
        }
        if(root.right === null){
            return (root.data > root.left.data);
        }
        else{
            let left = this.isMaxHeap(root.left);
            let right = this.isMaxHeap(root.right);
            
            if(left && right && ((root.data > root.left.data) && (root.data >  root.right.data))){
                return true
            }
            return false
        }
    }

    isHeap(root) {
        // your code here
        
        let index = 0;
        let totoalCount = this.countNodes(root);
        if(this.isBST(root, index, totalCount) && this.isMaxHeap(root)){
            return true;
        }
        return false;
        
    }
}
