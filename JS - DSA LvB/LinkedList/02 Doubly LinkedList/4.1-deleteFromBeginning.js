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

    traversal(){
        let arr = [];
        let tmp = this.head;
        // let tmp = this.tail;         // reverse order
        while(tmp!==null){
            arr.push(tmp.data);
            tmp = tmp.next;
            // tmp = tmp.prev;          // reverse order
        }
        return arr;
    }

    deleteFromBeginning(){
        if(this.length===0){
            
            return 'Linked List is Empty'
        }else if(this.length===1){
            let tmp = this.head
            this.head = null;
            this.tail = null;
            this.length--;
            return tmp;
        }
        else{
            let tmp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            tmp.next = null;
            this.length--;
            return tmp;
        }
    }

}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtEnd("AA")
LinkedList.insertAtEnd("BB")
LinkedList.insertAtEnd("CC")
console.log(LinkedList.traversal()) 

console.log(LinkedList.deleteFromBeginning())
console.log(LinkedList);
console.log(LinkedList.deleteFromBeginning())
console.log(LinkedList.deleteFromBeginning())
console.log(LinkedList.deleteFromBeginning())
console.log(LinkedList.deleteFromBeginning())
console.log(LinkedList.traversal()) 
