
/**
 * @param {Node} root
 * @param {number} x
 * @returns {Node}
*/

class Solution {
    // Function to delete a node from BST.
    
    helper(root){
        if(root.left === null){
            return root.right;
        }
        else if(root.right === null){
            return root.left;
        }
        let rightChild = root.right;
        let lastRight = this.findLastRight(root.left);
        lastRight.right = rightChild;
        return  root.left;
    }
    
    findLastRight(root){
        if(root.right === null){
            return root;
        }
        return this.findLastRight(root.right);
    }
    
    deleteNode(root, x) {
        // your code here
        if(root === null){
            return null;
        }
        if(root.data === x){
            return this.helper(root);
        }
        
        let dummy = root;
        while(root!==null){
            if(root.data > x){
                if(root.left !== null && root.left.data === x){
                    root.left = this.helper(root.left);
                    break;
                }
                else{
                    root = root.left;
                }
            }else{
                if(root.right !== null && root.right.data === x){
                    root.right = this.helper(root.right);
                    break;
                }else{
                    root = root.right;
                }
            }
            
        }
        return dummy;
    }
}