// with one pointer

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev  = null;
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
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    removeNodeAt(index){

        // if DLL is empty!
        if(this.length===0){
            return "DLL is Empty!";
        }

        // if index is invalid
        if(index<0 || index >= this.length){
            return false;
        }


        // if DLL have only one node
        if(this.length===1){
            let tmp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return tmp;
        }

        // remove from beginning (from 0 index)
        if(index===0){
            let tmp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            tmp.next = null;
            this.length--;
            return tmp;
        }

        // remove from last 
        if(index===this.length-1){
            let tmp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            tmp.prev = null;
            this.length--;
            return tmp;
        }

        // if DLL have more than 1 node | optimazation search
        if(index<this.length/2){
            let tmp = this.head;
            for(let i=0;i!==index;i++){
                tmp=tmp.next;
            }
            // console.log(tmp)
            tmp.prev.next = tmp.next;
            tmp.next.prev = tmp.prev;
            tmp.next = null;
            tmp.prev = null;
            this.length--;
            console.log("from 1st half of DLL");
            return tmp;
        }
        else{
            let tmp = this.tail;
            for(let i= this.length-1;i!==index;i--){
                tmp = tmp.prev
            }
            tmp.prev.next = tmp.next;
            tmp.next.prev = tmp.prev;
            tmp.next = null;
            tmp.prev = null;
            this.length--;
            console.log("from 2nd half of DLL");
            return tmp;
        }

    }

}

let myDLL = new DoublyLinkedList(11);
// adding nodes
myDLL.insertAtLast(22);
myDLL.insertAtLast(33);
myDLL.insertAtLast(44);
myDLL.insertAtLast(55);
myDLL.insertAtLast(66);
myDLL.insertAtLast(77);

// removeing nodes
console.log(myDLL.removeNodeAt(0));
console.log(myDLL.removeNodeAt(4));
console.log(myDLL.removeNodeAt(2));
console.log(myDLL.removeNodeAt(-1));
console.log(myDLL.removeNodeAt(4));
console.log(myDLL.removeNodeAt(0));
console.log(myDLL.removeNodeAt(0));
console.log(myDLL.removeNodeAt(0));
console.log(myDLL.removeNodeAt(0));
console.log(myDLL.removeNodeAt(0));
