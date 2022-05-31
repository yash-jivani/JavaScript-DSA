class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    Enqueue(value){

        const newNode = new Node(value);
        if(this.length===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    Dequeue(){
        if(this.length===0){
            return "Queue is Empty!"
        }
        else{
            let tmp = this.first;
            this.first = this.first.next;
            tmp.next = null;
            this.length--;
            if(this.length===0){
                this.last = null;
            }
            return tmp;
        }
    }

}

let myQueue  = new Queue(111);
myQueue.Enqueue(222);
console.log(myQueue);

console.log("\nDELETED NODE :",myQueue.Dequeue());
console.log("\nDELETED NODE :",myQueue.Dequeue());
console.log("\nDELETED NODE :",myQueue.Dequeue());
console.log(myQueue);