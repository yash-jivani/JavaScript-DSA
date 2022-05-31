// index starts from 0.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value)
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

    insertNode(index,value){
        if(index===0){
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head  = newNode;
            this.length++;
            return this;
        }
        if(index<0 || index > this.length){
            console.log('---invaild---')
            return this;
        }
        if(index===this.length){
            const newNode = new Node(value)
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
            return this
        }
        const newNode = new Node(value);
        let tmp = this.head;
        while(index-1!==0){  // index-1 => jisko index per add(insert) karna h usse 1 step pehle
            tmp = tmp.next;
            index--;
        }
        newNode.next = tmp.next;
        tmp.next = newNode;
        this.length++;
    }
}


let myLL = new LinkedList("A");
myLL.push("B");
myLL.push("C");
myLL.push("D");
myLL.push("E");

console.log(myLL);

myLL.insertNode(0,"indexAt-0");
myLL.insertNode(3,"At-third-index");
myLL.insertNode(7,"At-last");

console.log(myLL);