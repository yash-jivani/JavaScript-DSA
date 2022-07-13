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

    deleteFromEnd(){
        if(this.length===0){
            return 'Linked List is Empty!'
        }

        else{
            let tmp = this.head;
            if(this.length===1){
                tmp = this.head;
                this.head = null;
                this.tail = null;
                this.length--;
                return tmp;
            }else{
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
            }

        }
    }
}

const linkedList = new SinglyLL(1);
linkedList.insertAtEnd(2)
linkedList.insertAtEnd(3)
linkedList.insertAtEnd(4)

// console.log(linkedList.traversal())

console.log(linkedList.deleteFromEnd())
console.log(linkedList.deleteFromEnd())
// console.log(linkedList.traversal())
console.log(linkedList)
console.log(linkedList.deleteFromEnd())
console.log(linkedList.deleteFromEnd())
console.log(linkedList.deleteFromEnd())

// console.log(linkedList.traversal())
console.log(linkedList)