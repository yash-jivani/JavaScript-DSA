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

    getValue(index){
        if(index<0 || index>=this.length){
            return '🛑 Invalid Index'
        }
        else{
            let tmp = this.head;
            let count  = index;
            while(count!==0){
                tmp = tmp.next;
                count--;
            }
            return tmp.value;
        }
    }

}

const linkedList = new SinglyLL(1);
linkedList.insertAtEnd(2)
linkedList.insertAtEnd(3)
linkedList.insertAtEnd(4)

console.log(linkedList.traversal())

console.log(linkedList.getValue(0))
console.log(linkedList.getValue(2))
console.log(linkedList.getValue(3))
console.log(linkedList.getValue(-1))
console.log(linkedList.getValue(99))
// console.log(linkedList)