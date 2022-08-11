
class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.top = -1;
    }

    push(value){
        if(this.top < this.arr.length-1){
            this.top++;
            this.arr[this.top] = value;
        }else{
            console.log('💨💨💨💨 Stack overflow 💨💨💨💨');
        }
    }

    pop(){
        if(this.top>=0){
            let data  = this.arr[this.top];
            this.top--;
            return data;
        }else{
            return `🕳🕳🕳🕳 Stack underflow 🕳🕳🕳🕳`;
        }
    }

    isEmpty(){
        if(this.top === -1){
            return true;
        }else{
            return false;
        }
    }

    peek(){
        if(this.top<this.arr.length){
            return this.arr[this.top];
        }
    }
}


const myStack = new Stack(5);
console.log(myStack);

console.log(myStack.pop());
myStack.push(88);
myStack.push(77);
myStack.push(66);
myStack.push(44);
myStack.push(22);
myStack.push(22);

console.log(myStack);
console.log(myStack.isEmpty());
console.log(myStack.peek());
