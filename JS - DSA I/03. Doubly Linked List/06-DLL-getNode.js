// ! index starts from 0(zero).

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

    getNode(index){
        
        if(index<0 || index>=this.length){
            return ("⛔ invalid index! ")
        }

        //  ? --> Optimization <-- 

        // * if index is *less then* DLL's length/2 (if index is in the first half of DLL) 
        if(index<this.length/2){
            let tmp = this.head;
            for(let i = 0; i<index;i++){
                tmp = tmp.next;
            }
            return tmp
        }
        // * if index is *greater then* DLL's length/2 (if index is in the second hald of DLL)
        else{
            let tmp = this.tail;
            for(let i = this.length-1;i!==index;i--){
                tmp=tmp.prev
            }
            return tmp
        }
    }
}

let myDLL = new DoublyLinkedList(11);   // 0 index
myDLL.insertAtLast(22);                 // 1 index
myDLL.insertAtLast(33);                 // 2 index
myDLL.insertAtLast(44);                 // 3 index
console.log("NODE ::" , myDLL.getNode(1), myDLL.getNode(1).value)
console.log("NODE ::"  ,myDLL.getNode(3), myDLL.getNode(3).value)
console.log("NODE ::" , myDLL.getNode(4), myDLL.getNode(4).value)
console.log("NODE ::" , myDLL.getNode(-1), myDLL.getNode(-1).value)
