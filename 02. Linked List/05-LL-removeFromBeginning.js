// * shift => delete node from beginning

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
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // SHIFT | remove from beginning
  removeFromBeginning() {
    let tmp = this.head;

    if (this.head === null) {
      return "LinkedList is empty!";
    }

    this.head = this.head.next;
    tmp.next = null; // ! NOTE : removig connection ( next node address ) | DSA I - M4 v9 - 1.30
    this.length--;

    if (this.length === 0) {   // DSA I | M4-v9
      this.tail = null;   
    }

    return tmp;
  }
}

let myLL = new LinkedList(4);
myLL.push(5);
myLL.push(56);
myLL.push(576);
console.log(myLL);

console.log(myLL.removeFromBeginning());
console.log(myLL.removeFromBeginning());
console.log(myLL.removeFromBeginning());
// console.log(myLL)
console.log(myLL.removeFromBeginning());
console.log(myLL.removeFromBeginning());
