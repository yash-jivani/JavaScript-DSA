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

    getValue(index){
        if(index < 0 || index > this.length){
            return 'Invalid index'
        }
        else{
            let tmp = this.head;
            let count = index;
            while(count!==0){
                tmp = tmp.next;
                count--;
            }
            return tmp.data;
        }
    }

}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtEnd("AA")
LinkedList.insertAtEnd("BB")
LinkedList.insertAtEnd("CC")
console.log(LinkedList.traversal()) 
console.log(LinkedList.getValue(0))
console.log(LinkedList.getValue(2))
console.log(LinkedList.getValue(3))
console.log(LinkedList.getValue(99))
console.log(LinkedList.getValue(-9))


