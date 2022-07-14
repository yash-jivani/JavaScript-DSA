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

    insertAtEnd(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;    
        }
        this.length++;
    }

}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtEnd("AA")
LinkedList.insertAtEnd("BB")
LinkedList.insertAtEnd("CC")

console.log(LinkedList);