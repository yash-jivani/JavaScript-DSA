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

    setNodeValue(index,value){
        if(index<0 || index>=this.length){
            return "Invalid index"
        }
        if(index<this.length/2){
            let tmp = this.head;
            for(let i=0;i<index;i++){
                tmp = tmp.next
            }
            tmp.value = value;
            return "\n\n::::::::::::::::\nsuccess! 1st half of DLL\n";
        }
        else{
            let tmp = this.tail;
            for(let i=this.length-1;i!==index;i--){
                tmp = tmp.prev;
            }
            tmp.value = value;
            return "success! 2nd half of DLL\n:::::::::::::::::::::\n\n"
        }
    }

    getNode(index){
        
        if(index<0 || index>=this.length){
            return ("⛔ invalid index! ");
        }

        //  ? --> Optimization <-- 

        // * if index is *less then* DLL's length/2 (if index is in the first half of DLL) 
        if(index<this.length/2){
            let tmp = this.head;
            for(let i = 0; i<index;i++){
                tmp = tmp.next;
            }
            return tmp;
        }
        // * if index is *greater then* DLL's length/2 (if index is in the second hald of DLL)
        else{
            let tmp = this.tail;
            for(let i = this.length-1;i!==index;i--){
                tmp=tmp.prev;
            }
            return tmp;
        }
    }

}

let myDLL = new DoublyLinkedList(11);
myDLL.insertAtLast(22);
myDLL.insertAtLast(33);
myDLL.insertAtLast(44);

console.log('Before ::');
console.log(myDLL.getNode(0).value);
console.log(myDLL.getNode(1).value);
console.log(myDLL.getNode(2).value);
console.log(myDLL.getNode(3).value);


console.log(myDLL.setNodeValue(1,"one"))
console.log(myDLL.setNodeValue(3,"three"))
// console.log(myDLL);

console.log('After ::');
console.log(myDLL.getNode(0).value);
console.log(myDLL.getNode(1).value);
console.log(myDLL.getNode(2).value);
console.log(myDLL.getNode(3).value);

