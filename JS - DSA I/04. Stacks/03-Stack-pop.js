class Node{
    constructor(value){
        this.value = value;
        this.next= null;
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
        if(this.length===0){
            this.top = newNode;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length===0){   // same as -> if(this.top===null)
            return "Stack is Empty!"
        }
        let tmp = this.top;
        this.top = this.top.next;
        tmp.next = null;
        this.length--;
        return tmp;
    }
}

let myStack = new Stack(111);
// push node
myStack.push(222);
myStack.push(333);

console.log(myStack);

// pop node
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack);
