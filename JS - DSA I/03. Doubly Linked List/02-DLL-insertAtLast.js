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

    // * insert at Last 
    insertAtLast(value){
        const newNode = new Node(value);

        // if DLL is empty! 
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }
        // else set 
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        // return this;   // optional
    }

}

let myDLL = new DoublyLinkedList(11);
myDLL.insertAtLast(22);
myDLL.insertAtLast(33);
myDLL.insertAtLast(44);
console.log(myDLL);