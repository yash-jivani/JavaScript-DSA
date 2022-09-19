
/**
 * @param {Node} root
 * @param {number} n1
 * @param {number} n2
 * @returns {Node}
*/


class Solution 
{
    //Function to find the lowest common ancestor in a BST.
    LCA(root, n1, n2)
    {
        if(root === null){
            return null; 
        }
        //your code here
        let curr = root.data;
        if(curr < n1 && curr < n2){
            return this.LCA(root.right,n1,n2);
        }
        if(curr > n1 && curr > n2){
            return this.LCA(root.left,n1,n2);
        }
        return root;
    }
}