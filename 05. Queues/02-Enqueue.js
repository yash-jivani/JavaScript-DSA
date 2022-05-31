class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;  // start
        this.last = newNode;    // end
        this.length = 1
    }
    Enqueue(value){
        const newNode = new Node(value);
        // if queue is empty!
        if(this.length===0){
            this.first=newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this
    }
}

let myQueue = new Queue(111);
myQueue.Enqueue(222)
myQueue.Enqueue(333)
myQueue.Enqueue(444)
console.log(myQueue)