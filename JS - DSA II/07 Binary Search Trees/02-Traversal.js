class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // if tree is empty (1st node)
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let tmp = this.root;
    while (true) {
      if (tmp.data === newNode.data) {
        console.log(`Value already exist in tree`);
        return this;
      }

      if (newNode.data < tmp.data) {
        // left side
        if (tmp.left === null) {
          tmp.left = newNode;
          return this;
        }
        tmp = tmp.left;
      } else {
        // right side
        if (tmp.right === null) {
          tmp.right = newNode;
          return this;
        }
        tmp = tmp.right;
      }
    }
  }

  // ->>> Traversal <<<-

  // InOrder
  inOrderhelper(root) {
    if (root === null) {
      return;
    }
    this.inOrderhelper(root.left);
    console.log(root.data);
    this.inOrderhelper(root.right);
  }
  inOrder() {
    this.inOrderhelper(this.root);
  }

  // PostOrder
  postOrderHelper(root) {
    if (root === null) {
      return;
    }
    this.postOrderHelper(root.left);
    this.postOrderHelper(root.right);
    console.log(root.data);
  }
  postOrder() {
    this.postOrderHelper(this.root);
  }

  // PreOrder
  preOrderhelper(root) {
    if (root === null) {
      return;
    }
    console.log(root.data);
    this.preOrderhelper(root.left);
    this.preOrderhelper(root.right);
  }
  preOrder() {
    this.preOrderhelper(this.root);
  }
}

const myTree = new Tree();
myTree.insert(10);
myTree.insert(15);
myTree.insert(9);
myTree.insert(7);
myTree.insert(17);
myTree.insert(30);
myTree.insert(56);
myTree.insert(20);

// Traversal :
console.log("\nInOrder ::");
myTree.inOrder();
console.log("\nPostOrder ::");
myTree.postOrder();
console.log("\nPreOrder ::");
myTree.preOrder();
