/**
 * @param {Node} root
 * @param {number} input
 * @returns {number}
*/

class Solution {
    // Function to return the ceil of given number in BST.
    findCeil(root, input) {
        // your code here
        let ceil = -1;
        while(root){
            if(root.data === input){
                ceil = root.data;
                return ceil;
            }
            
            // current node data is less then given input
            if(root.data < input){
                root = root.right;
            }
            else{
                ceil = root.data;
                root = root.left;
            }
        }
        return ceil;
    }
}