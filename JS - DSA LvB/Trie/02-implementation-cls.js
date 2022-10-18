// Javascript implementation of search and insert operations
// on Trie

// Alphabet size (# of symbols)
let ALPHABET_SIZE = 26;

// trie node
class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = new Array(ALPHABET_SIZE);
    for (let i = 0; i < ALPHABET_SIZE; i++) this.children[i] = null;
  }
}

let root;

// If not present, inserts key into trie
// If the key is prefix of trie node,
// just marks leaf node
function insert(word) {
  let curr = root;

  for (let level = 0; level < word.length; level++) {
    let index = word[level].charCodeAt(0) - "a".charCodeAt(0);
    if (curr.children[index] == null) curr.children[index] = new TrieNode();

    curr = curr.children[index];
  }

  // mark last node as leaf
  curr.isEndOfWord = true;
}

// Returns true if key presents in trie, else false
function search(word) {
  let curr = root;

  for (let level = 0; level < word.length; level++) {
    let index = word[level].charCodeAt(0) - "a".charCodeAt(0);

    if (curr.children[index] == null) return false;

    curr = curr.children[index];
  }

  return curr.isEndOfWord;
}

root = new TrieNode();
