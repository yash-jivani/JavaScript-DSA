/*
class TrieNode{
    constructor(){ 
        this.children = new Array(26);
        this.children.fill(null);
        // isEndOfWord is True if node represent the end of the word 
        this.isEndOfWord = false
    }
}
*/

/**
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be inserted)
 */
class Solution {
  isEmpty(root) {
    for (let i = 0; i < 26; i++) if (root.children[i] != null) return false;
    return true;
  }

  remove(root, key, depth = 0) {
    if (root == null) return null;

    if (depth == key.length) {
      if (root.isEndOfWord) root.isEndOfWord = false;

      if (this.isEmpty(root)) {
        root = null;
      }

      return root;
    }

    let index = key[depth].charCodeAt(0) - "a".charCodeAt(0);
    root.children[index] = this.remove(root.children[index], key, depth + 1);

    if (this.isEmpty(root) && root.isEndOfWord == false) {
      root = null;
    }

    return root;
  }

  deleteKey(root, key) {
    //code here
    return this.remove(root, key, 0);
  }
}
