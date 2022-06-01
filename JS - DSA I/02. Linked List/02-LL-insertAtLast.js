// * add node at last 

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

  // * PUSH OPERATION
  push(value) {
    // newNode for adding(push) new value to LL
    const newNode = new Node(value);

    // if LL in empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

let myLL = new LinkedList(2);
myLL.push(5);
myLL.push(6);
myLL.push(50);
console.log(myLL);
