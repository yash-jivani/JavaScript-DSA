
/**
 * @param {Node} root
 * @returns {Node}
*/


class Solution 
{
    //Function to fix a given BST where two nodes are swapped.  
    first;
    prev;
    middle;
    last;
    
    inOrder(root){
        if(root===null) return;
        
        this.inOrder(root.left);
        
        if(this.prev !== null && (root.data < this.prev.data)){
            
            if(this.first === null){
                this.first = this.prev;
                this.middle = root;
            }else{
                this.last = root;
            }
        }
        
        this.prev  = root;
        this.inOrder(root.right);
    }
    
    correctBST(root)
    {
        //your code here
        this.first = this.prev = this.last = this.middle = null;
        this.prev = new Node(-Infinity);
        this.inOrder(root);
        if(this.first !== null && this.last !== null){
            let tmp = this.first.data;
            this.first.data = this.last.data;
            this.last.data = tmp;
        }else if(this.first!==null && this.middle !== null){
            let tmp = this.first.data;
            this.first.data = this.middle.data;
            this.middle.data = tmp;
        }
        
    }
}