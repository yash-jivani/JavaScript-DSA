/**
 * @param {Node} root
 * @param {number} x
 * @returns {boolean}
*/

class Solution {
    // Function to search a node in BST.
    search(root, x) {
        // your code here
        while(root !== null){
            if(root.data===x){
                return root;
            }
            if(root.data > x){
                root = root.left;
            }
            else{
                root = root.right;
            }
        }
    }
}