// * Remove last node

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
  push(value) {
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

  // * POP OPERATION
  pop() {
    // if LL is empty
    if (this.head === null) {
      return "LinkedList is empty";
    }

    let tmp = this.head;
    let prev = this.head;

    while (tmp.next) {          // check if NEXT node is present or NOT
      prev = tmp;             // if yes then prev = tmp
      tmp = tmp.next;           // and tmp => next node
    }

    // now prev position = 2nd last node
    this.tail = prev; // make tail to 2nd last node
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      // check if len = 0 thn head and tail must be null (after removing all element)
      this.head = null;
      this.tail = null;
    }
    return tmp;
  }
}

let myLL = new LinkedList(4);
// push elements
myLL.push(5);
myLL.push(6);
myLL.push(62);
console.log(myLL);

// removing elements
let p1 = myLL.pop();
let p2 = myLL.pop();
let p3 = myLL.pop();
let p4 = myLL.pop();
let p5 = myLL.pop();
console.log(myLL);

// popped items(nodes)
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
