class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
   constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value)
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    removeNodeAt(index){

        // condition 1: if index is invalid
        if(index<0 || index>=this.length){
            console.log("Invaild index");
            return
        }

        // remove from 0 index
        if(index===0){
            let tmp = this.head;
            this.head = this.head.next;
            tmp.next = null
            this.length--;
            // if linkedList is empty! ( all nodes are removed )
            if(this.length===0){
                this.tail = null;
            }
            return tmp.value
        }

        // remove last node
        if(index===this.length-1){
            let tmp = this.head;
            let prev = this.head;
            while(tmp.next!==null){
                prev=tmp;
                tmp=tmp.next;
            }
            prev.next = null;
            this.length--;
            return tmp.value;
        }
        let currentIndex = this.head;
        let beforeCurrentIndex = this.head;
        while(index-1!==0){
            beforeCurrentIndex = beforeCurrentIndex.next;
            index--;
        }
        currentIndex = beforeCurrentIndex.next;
        // console.log(currentIndex);
        // console.log(beforeCurrentIndex);
        beforeCurrentIndex.next = currentIndex.next;
        currentIndex.next=null;
        this.length--;
        return currentIndex.value;
    }
}

let myLL = new LinkedList("A");
myLL.push("B");
myLL.push("C");
myLL.push("D");
myLL.push("E");

console.log(myLL);   
myLL.removeNodeAt(2);  // remove from 2nd index ( "C" ) -> A,B,D,E
myLL.removeNodeAt(0);  // remove from 0 index ( "A" )  -> B,D,E
myLL.removeNodeAt(3);  // remove from 3rd index ( invalid ) -> No change
myLL.removeNodeAt(999);  // remove from 999 index ( invalid ) -> No change
myLL.removeNodeAt(2);  // remove from 2nd index ( last node )  ( "E" )  -> B,D
myLL.removeNodeAt(0);   // remove from 0 index ( "B" ) -> D
myLL.removeNodeAt(0);   // remove from 0 index ( "D" ) -> empty!
console.log(myLL);
