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

    deleteFromBeginning(){
        if(this.head===null){
            return 'Linked List is already Empty!';
        }
        else{
            let tmp = this.head;
            this.head = tmp.next;
            tmp.next = null;
            this.length--;
            // ager remove kiya hua ele. LL ka last ele hua to tail ki value bhi null karni padegi
            if(this.length===0){
                this.tail=null;
            }

            return tmp;
        }
    }

}

const linkedList = new SinglyLL(1);
linkedList.insertAtEnd(2)
linkedList.insertAtEnd(3)
linkedList.insertAtEnd(4)

console.log(linkedList.traversal())

console.log(linkedList.deleteFromBeginning())
console.log(linkedList.deleteFromBeginning())
console.log(linkedList.traversal())
console.log(linkedList.deleteFromBeginning())
console.log(linkedList.deleteFromBeginning())

console.log(linkedList.traversal())
console.log(linkedList)