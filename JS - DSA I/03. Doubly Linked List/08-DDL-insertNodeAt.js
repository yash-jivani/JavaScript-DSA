// with 1 pointer

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

    insertAtLast(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    getNode(index){
        
        if(index<0 || index>=this.length){
            return ("⛔ invalid index! ")
        }
        if(index<this.length/2){
            let tmp = this.head;
            for(let i = 0; i<index;i++){
                tmp = tmp.next;
            }
            return tmp
        }else{
            let tmp = this.tail;
            for(let i = this.length-1;i!==index;i--){
                tmp=tmp.prev
            }
            return tmp
        }
    }

    insertNodeAt(index,value){
        // invalid index
        if(index<0 || index>this.length){
            return "Invalid index"
        }
        // if DDL is empty!
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this
        }
        // same as insert at beginning
        const newNode = new Node(value);
        if(index===0){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
            return this
        }
        // same as insert at last
        if(index===this.length){
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
            return this
        }
        // insert at given index | optimazation
        if(index<this.length/2){
            let tmp=this.head
            for(let i=0;i!==index;i++){
                tmp = tmp.next;    
            }
            newNode.next = tmp.prev.next;
            tmp.prev.next = newNode;
            newNode.prev = tmp.prev;
            newNode.next = tmp;
            this.length++;
            return this
        }else{
            let tmp=this.head
            for(let i=this.length-1;i!==index;i--){
                tmp = tmp.prev;    
            }
            newNode.prev = tmp.next.prev;
            tmp.next.prev = newNode;
            newNode.next = tmp.next;
            newNode.prev = tmp;
            this.length++;
            return this
        }
    }
    
}

let myDLL = new DoublyLinkedList(11);
myDLL.insertAtLast(22);
myDLL.insertNodeAt(0,"zero-index");
myDLL.insertNodeAt(3,"3rd-index");
console.log(myDLL.getNode(0).value);
console.log(myDLL.getNode(1).value);
console.log(myDLL.getNode(2).value);
console.log(myDLL.getNode(3).value);
console.log(myDLL.getNode(4).value);
