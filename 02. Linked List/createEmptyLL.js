class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class EmptyLL{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(this.head===null){
            return 'LL is empty!'
        }

        let tmp  = this.head;
        let prev = this.head;

        while(tmp.next){
            prev = tmp;
            tmp = tmp.next;
        }
        this.tail = prev;
        this.tail.next = null;

        this.length--;

        if(this.length===0){
            this.head = null;
            this.tail = null;
        }

        return tmp
    }

}

let myLL = new EmptyLL();
console.log(myLL)
myLL.push(1)
myLL.push(2)
myLL.push(3)
myLL.push(4)
myLL.push(5)
myLL.push(6)
myLL.push(7)

console.log(myLL)

console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())
console.log(myLL.pop())

console.log(myLL)
