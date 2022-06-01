class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    insertAtBeginning(value){
        const newNode = new Node(value);
        if(this.length===0){   // OR -> if(this.head===null)
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        // return this;   // optional
    }
}

let myDLL = new DoublyLinkedList(111);
myDLL.insertAtBeginning(222);
myDLL.insertAtBeginning(444);
console.log(myDLL)

