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

    removeFromBeginnning(){
        // if DLL is empty!
        if(this.length===0){  // same as -> if(this.head===null)
            console.log("\n==> DLL is Empty 🎈🎈🎈")
            return false
        }
        // if only one node is remains
        if(this.length===1){
            let tmp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return tmp;
        }
        // if more than one nodes
        let tmp = this.head;
        this.head = this.head.next;
        tmp.next = null;
        this.head.prev = null;
        this.length--;
        return tmp; 
    }

}

let myDLL = new DoublyLinkedList(11);
myDLL.insertAtLast(22);
myDLL.insertAtLast(33);
myDLL.insertAtLast(44);

console.log("\nDELETED NODE :: ",myDLL.removeFromBeginnning())
console.log("\nDELETED NODE :: ",myDLL.removeFromBeginnning())
console.log("\nDELETED NODE :: ",myDLL.removeFromBeginnning())
console.log("\nDELETED NODE :: ",myDLL.removeFromBeginnning())
console.log("\nDELETED NODE :: ",myDLL.removeFromBeginnning())

console.log("\nDLL ::\t",myDLL);