class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLL{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    insertAtBeginning(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;    
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

}

const linkedList = new SinglyLL(11);
linkedList.insertAtBeginning(22);
linkedList.insertAtBeginning(33);
linkedList.insertAtBeginning(44);
console.log(linkedList);