// * unshift => insert node at beginning

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // * UNSHIFT | insert at beginning OPERATION
  insertAtBeginning(value) {
    const newNode = new Node(value);

    // if LL is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } 
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
}

let myLL = new LinkedList(5);
myLL.insertAtBeginning(2);
myLL.insertAtBeginning(200);
console.log(myLL);
