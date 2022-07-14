class Node{
    constructor(value){
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    insertAtBeginning(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;    
        }
        this.length++;
    }
}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtBeginning("AA")
LinkedList.insertAtBeginning("BB")
LinkedList.insertAtBeginning("CC")
console.log(LinkedList);