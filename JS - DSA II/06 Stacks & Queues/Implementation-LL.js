class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.front = null;
    this.rear = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.rear = this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  remove() {
    if (this.front === null) {
      return `Queue is empty!`;
    } else {
      let tmp = this.front;
      this.front = this.front.next;
      this.length--;
      return tmp.data;
    }
  }
}

const myQueue = new Queue();
myQueue.add(1);
myQueue.add(2);
myQueue.add(3);
myQueue.add(4);
console.log("\nQueue length :: ", myQueue.length);
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log(myQueue.remove());
console.log("\nQueue length :: ", myQueue.length);
