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

    removeFromLast(){

        // if DLL is empty!
        if(this.length===0){  // same as -> if(this.head===null)
            console.log('\n\n==> DLL is empty! <==\n')
            return false
        }
        // if only One node is remains
        if(this.length===1){   // same as -> if(this.head.next===null)
            let tmp = this.head
            this.head = null;
            this.tail = null;
            this.length--;
            return tmp;
        }

        // if more than one nodes
        let tmp = this.tail;
        this.tail = this.tail.prev;
        tmp.prev = null;
        this.tail.next = null;
        this.length--;  
        return tmp
    }
}

let myDLL = new DoublyLinkedList(111);
myDLL.insertAtLast(222);
myDLL.insertAtLast(333);
myDLL.insertAtLast(444);
console.log("\nDELETED NODE :: \n",myDLL.removeFromLast());
console.log("\nDELETED NODE :: \n",myDLL.removeFromLast());
console.log("\nDELETED NODE :: \n",myDLL.removeFromLast());
console.log("\nDELETED NODE :: \n",myDLL.removeFromLast());
console.log("\nDELETED NODE :: \n",myDLL.removeFromLast());
console.log("\nDoubly LinkedList ::\t",myDLL);