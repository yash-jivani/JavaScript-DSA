class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;     // start
        this.last = newNode;      // end
        this.length = 1;
    }
}

let myQueue = new Queue(1);
console.log(myQueue)