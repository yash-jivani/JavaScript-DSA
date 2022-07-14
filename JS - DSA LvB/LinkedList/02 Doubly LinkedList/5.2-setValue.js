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

    setValue(index,value){
        if(index < 0 || index > this.length){
            console.log('Invalid Index');
            return

        }
        else{
            let tmp = this.head;
            let count = index;
            while(count!==0){
                tmp = tmp.next;
                count--;
            }
            tmp.data = value;
            return;
        }
    }

}

const LinkedList = new DoublyLL(00);
LinkedList.insertAtEnd(11)
LinkedList.insertAtEnd(22)
LinkedList.insertAtEnd(33)
console.log(LinkedList.traversal()) 
LinkedList.setValue(0,'ZERO')
LinkedList.setValue(2,'TWO')
LinkedList.setValue(3,'THREE')
LinkedList.setValue(99,'Nine')
LinkedList.setValue(-9,'- Nine')
console.log(LinkedList.traversal()) 



