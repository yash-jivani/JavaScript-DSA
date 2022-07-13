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

    setValue(index,value){
        if(index < 0 || index>=this.length){
            console.log('🛑 Invalid Index')
            return;
        }
        else{
            let count = index;
            let tmp = this.head;
            while(count!==0){
                tmp = tmp.next;
                count--;
            }
            tmp.value = value;
            return;
        }
    }

}

const linkedList = new SinglyLL(1);
linkedList.insertAtEnd(2)
linkedList.insertAtEnd(3)
linkedList.insertAtEnd(4)

console.log(linkedList.traversal())

linkedList.setValue(0,'ZERO');
linkedList.setValue(2,'TWO');
linkedList.setValue(3,"THREE");
linkedList.setValue(-1);
linkedList.setValue(99);

console.log(linkedList.traversal())

// console.log(linkedList)