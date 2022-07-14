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

    deleteFromIndex(index){

        if(this.length===0){
            return 'LinkedList is empty'
        }

        if(index < 0 || index > this.length){
            return 'Invalid index'
        }
        else{

            if(this.length===1){
                let tmp = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
                return tmp
            }

            if(index===0){
                // delete from beginning
                let tmp = this.head;
                this.head = this.head.next;
                this.head.prev = null;
                tmp.next = null;
                this.length--;
                return tmp;
            }
            else if(index === this.length-1){
                // delete from end
                let tmp = this.tail;
                this.tail = this.tail.prev;
                tmp.prev = null;
                this.tail.next = null;
                this.length--;
                return tmp;

            }else{
                // delete from index
                let tmp = this.head;
                let count = index;
                while(count!==0){
                    tmp =tmp.next;
                    count--;
                }
                tmp.prev.next = tmp.next;
                tmp.next.prev = tmp.prev;
                tmp.next = null;
                tmp.right = null;
                this.length--;
                return tmp;
            }
        }
    }

}

const LinkedList = new DoublyLL(11);
LinkedList.insertAtEnd("AA")
LinkedList.insertAtEnd("BB")
LinkedList.insertAtEnd("CC")
console.log(LinkedList.traversal()) 

console.log(LinkedList.deleteFromIndex(0))
console.log(LinkedList.traversal()) 
console.log(LinkedList.deleteFromIndex(1))
console.log(LinkedList.traversal()) 
console.log(LinkedList); 
console.log(LinkedList.deleteFromIndex(1))
console.log(LinkedList.traversal()) 
console.log(LinkedList.deleteFromIndex(0))
console.log(LinkedList.traversal()) 
console.log(LinkedList.deleteFromIndex(0))
