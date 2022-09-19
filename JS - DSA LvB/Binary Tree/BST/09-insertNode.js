
/**
 * @param {Node} node
 * @param {number} data
 * @returns {Node}
*/

class Solution {
    // Function to insert a node in a BST.
    insert(node, data) {
        // your code here
        if(node === null){
            return new Node(data);
        }
        let tmpRoot = node;
        while(true){
            if(tmpRoot.data <= data){
                if(tmpRoot.right !== null){
                    tmpRoot = tmpRoot.right;
                }else{
                    if(tmpRoot.data === data){
                        tmpRoot = tmpRoot.right;
                        break;
                    }
                    tmpRoot.right = new Node(data);
                    break;
                }
            }
            if(tmpRoot.data > data){
                
                if(tmpRoot.left !== null){
                    tmpRoot = tmpRoot.left;
                }else{
                    if(tmpRoot.data === data){
                        tmpRoot = tmpRoot.left;
                        break;
                    }
                    tmpRoot.left = new Node(data);
                    break;
                }
            
            }
        }
        return node;
    }
}