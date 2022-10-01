// inOrder >>>>>>>

function MorrisInOrder(root) {
  let inOrderAns = [];
  let currRoot = root;
  while (currRoot !== null) {
    if (currRoot.left === null) {
      inOrderAns.push(root.data);
      currRoot = currRoot.right;
    } else {
      let prev = currRoot.left;
      while (prev.right && prev.right !== currRoot) {
        prev = prev.right;
      }
      if (prev.right === null) {
        // create link
        prev.right = currRoot;
        currRoot = currRoot.left;
      } else {
        // remove link
        prev.right = null;
        inOrderAns.push(currRoot.data);
        currRoot = currRoot.right;
      }
    }
  }
  return inOrderAns;
}

// preOrder >>>>>>>
function MorrisPreOrder(root) {
    let postOrderAns = [];
    let currRoot = root;
    while (currRoot !== null) {
      if (currRoot.left === null) {
        postOrderAns.push(root.data);
        currRoot = currRoot.right;
      } else {
        let prev = currRoot.left;
        while (prev.right && prev.right !== currRoot) {
          prev = prev.right;
        }
        if (prev.right === null) {
          // create link
          prev.right = currRoot;
          postOrderAns.push(currRoot.data);
          currRoot = currRoot.left;
        } else {
          // remove link
          prev.right = null;
          currRoot = currRoot.right;
        }
      }
    }
    return postOrderAns;
  }