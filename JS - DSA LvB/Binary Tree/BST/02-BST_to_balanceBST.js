
/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

 /**
   * @param {Node} root
   * @return {Node}
  */

  class Solution
  { 
      
      storeBSTNodes(root, nodes)
      {
          // Base case
          if (root == null)
              return;
     
          // Store nodes in Inorder (which is sorted
          // order for BST)
          this.storeBSTNodes(root.left, nodes);
          nodes.push(root);
          this.storeBSTNodes(root.right, nodes);
      }
      
      
      buildTreeUtil(nodes, start, end)
      {
          // base case
          if (start > end)
              return null;
     
          /* Get the middle element and make it root */
          let mid = parseInt((start + end) / 2, 10);
          let node = nodes[mid];
     
          /* Using index in Inorder traversal, construct
             left and right subtress */
          node.left = this.buildTreeUtil(nodes, start, mid - 1);
          node.right = this.buildTreeUtil(nodes, mid + 1, end);
     
          return node;
      }
      
    buildBalancedTree(root){
       //code here
       let nodes = [];
          this.storeBSTNodes(root, nodes);
     
          // Constructs BST from nodes[]
          let n = nodes.length;
          return this.buildTreeUtil(nodes, 0, n - 1);
       
    }
  }  