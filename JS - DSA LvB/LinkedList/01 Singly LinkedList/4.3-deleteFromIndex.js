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

    insertAtEnd(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    traversal(){
        let tmp = this.head;
        let arr = []
        while(tmp!=null){
            // we can also print data on console directly
            arr.push(tmp.value)
            tmp = tmp.next;
        }
        return arr;
    }

    deleteFromIndex(index){

        if(index===this.length){
            return 'LinkedList is Empty!'
        }

        if(index<0 || index>this.length){
            return '🛑 invalid Index';
        }
        else{
            if(index===0){
                // delete from beginning
                let tmp = this.head;
                this.head = this.head.next;
                tmp.next = null;
                this.length--;
                if(this.length===0){
                    this.tail = null;
                }
                return tmp;

            }
            else if(index===this.length-1){
                // delete from end
                let tmp = this.head;
                let count = this.length-2;
                while(count!==0){
                    tmp = tmp.next;
                    count--;
                }
                this.tail = tmp;
                tmp = tmp.next;
                this.tail.next = null;
                this.length--;

                return tmp;

            }else{
                // delete from given index
                let count = index-1;
                let tmp = this.head;
                while(count!==0){
                    tmp = tmp.next;
                    count--;
                }
                tmp.next = tmp.next.next;
                tmp.next.next = null;
                this.length--;
                return tmp.next;
            }
        }
    }

}

const linkedList = new SinglyLL(1);
linkedList.insertAtEnd(2)
linkedList.insertAtEnd(3)
linkedList.insertAtEnd(4)

// console.log(linkedList.traversal())

console.log(linkedList.deleteFromIndex(0))
console.log(linkedList.deleteFromIndex(2))
// console.log(linkedList.traversal())
// console.log(linkedList)
console.log(linkedList.deleteFromIndex(1))
console.log(linkedList.deleteFromIndex(0))
console.log(linkedList.deleteFromIndex(0))
console.log(linkedList.deleteFromIndex(999))
console.log(linkedList.deleteFromIndex(-1))

console.log(linkedList.traversal())
console.log(linkedList)