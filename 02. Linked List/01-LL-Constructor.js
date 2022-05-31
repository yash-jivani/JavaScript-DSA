class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor(value) {
    const newNode = new Node(value);

    // set head pointer to newNode
    this.head = newNode;
    // set tail pointer to head poiner (newNode)
    this.tail = this.head;
    // len of linkedlist
    this.length = 1
  }
}

// create instance of Linkedlist class with value of 4
let myLL = new Linkedlist(4)
console.log(myLL)