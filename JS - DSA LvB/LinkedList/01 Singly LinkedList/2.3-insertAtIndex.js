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

    insertAtIndex(value,index){
        if(index<0 || index > this.length){
            console.log("🛑 Invalid Index")
            return
        }
        else{
            const newNode = new Node(value);
            if(index===this.length){
                // insert At end
                this.tail.next = newNode;
                this.tail = newNode;
            }
            else if(index===0){
                // insert at beginning
                newNode.next = this.head;
                this.head = newNode;
            }
            else{
                // insert at index 
                let tmp = this.head;
                while(index-1!==0){
                    tmp = tmp.next;
                    index--;
                }
                newNode.next= tmp.next;
                tmp.next = newNode;
            }
            this.length++;
        }
    }
}

const linkedList = new SinglyLL(11);
linkedList.insertAtIndex("A",0);    // insert at 0 Index
linkedList.insertAtIndex(22,1);       // insert at 1st Index
linkedList.insertAtIndex(99,3);     // insert at last index
linkedList.insertAtIndex("Z",999);   // invalid index

console.log(linkedList);