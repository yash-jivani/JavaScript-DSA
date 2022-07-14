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
    
    deleteFromEnd(){
        if(this.length===0){
            return 'Linked List is Empty'
        }
        else{
            let tmp = this.tail;
            if(this.length===1){
                this.tail = null;
                this.head = null;
            }
            else{
                this.tail = this.tail.prev;
                tmp.prev = null;
                this.tail.next = null;
            }
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

console.log(LinkedList.deleteFromEnd())
console.log(LinkedList.traversal()) 
console.log(LinkedList.deleteFromEnd())
console.log(LinkedList.deleteFromEnd())
console.log(LinkedList.deleteFromEnd())
console.log(LinkedList);
console.log(LinkedList.deleteFromEnd())
console.log(LinkedList.traversal()) 
