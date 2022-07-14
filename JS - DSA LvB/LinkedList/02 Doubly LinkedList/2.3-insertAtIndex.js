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

    insertAtIndex(value,index){
        if(index < 0 || index > this.length){
            console.log("🛑 Invalid Index");
            return ;
        }
        else {
            const newNode = new Node(value);
            if(index===0){
                // insert at beginning
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;    

            }else if(index===this.length){
                // insert at end
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;  

            }else{
                // insert at given index
                let tmp = this.head;
                let count = index-1;
                while(count!==0){
                    tmp = tmp.next;
                    count--;
                }
                newNode.prev = tmp;
                newNode.next = tmp.next;
                tmp.next = newNode;
                newNode.next.prev = newNode;
            }
            this.length++;
        }
    }

}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtIndex("AA",1);
LinkedList.insertAtIndex("BB",0);
LinkedList.insertAtIndex("CC",3);
LinkedList.insertAtIndex("DD",999);
LinkedList.insertAtIndex("EE",-22);

console.log(LinkedList);