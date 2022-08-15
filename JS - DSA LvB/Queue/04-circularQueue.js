class CircularQueue {
  constructor(size) {
    this.front = -1;
    this.rear = -1;
    this.arr = new Array(size);
  }

  add(value) {
    // if queue if full
    // if front is at 0th index and rear is at last index OR  front position = 5 and rear poisition = 4 | Logic : LvB Lec60-28:26
    if (
      (this.rear === this.arr.length - 1 && this.front === 0) ||
      this.rear === (this.front - 1) % (this.arr.length - 1)
    ) {
      console.log(`Queue is full`);
      return false;
    }
    // first Element
    else if (this.rear === -1) {
      this.rear = this.front = 0;
      this.arr[this.rear] = value;
      return true;
    }

    // if rear -> at last index and front -> not at 0th index thn 👉 set rear to 0th index.
    else if (this.rear === this.arr.length - 1 && this.front !== 0) {
      this.rear = 0;
      this.arr[this.rear] = value;
      return true;
    }

    // normal flow
    else {
      this.rear++;
      this.arr[this.rear] = value;
      return true;
    }
  }

  remove() {
    // if queue is empty!
    if (this.front === -1) {
      console.log("Queue is empty!");
      return false;
    }

    let tmp = this.arr[this.front];
    this.arr[this.front] = -1;

    // ? condition order => important
    // removing last ele. from queue
    if (this.front === this.rear) {
      this.front = this.rear = -1;
    } 
    // if front -> at last index 👉 set front to 0th index.
    else if (this.front === this.arr.length - 1) {
      this.front = 0;
    } 
    // normal flow
    else {
      this.front++;
    }

    return tmp;
  }

  info() {
    console.log("\n<< Traversal :: ", this.arr);
    console.log(`Front : ${this.front}\nRear : ${this.rear}`);
    console.log(this.arr.length);
  }
}

let myCircularQueue = new CircularQueue(4);
myCircularQueue.add(111);
myCircularQueue.add(222);
myCircularQueue.add(333);
myCircularQueue.add(444);
myCircularQueue.info();
console.log(myCircularQueue.remove());
console.log(myCircularQueue.remove());
console.log(myCircularQueue.remove());
myCircularQueue.add("A");
console.log(myCircularQueue.remove());
myCircularQueue.add("B");
myCircularQueue.info();
