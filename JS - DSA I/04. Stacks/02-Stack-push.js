class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value);
        if(this.length===0){       // same as -> if(this.top===null)
            this.top = newNode;
        }
        else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;    // optional 
    }
}

let myStack = new Stack(111);
myStack.push(222);
myStack.push(333);
myStack.push(444);
console.log(myStack)
