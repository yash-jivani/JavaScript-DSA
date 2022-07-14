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

    reverse(){
        if(this.length===0){
            return false;
        }
        else{
            if(this.length===1){
                return;
            }else{
                // swap head and tail pointer
                let tmp = this.head;
                this.head = this.tail;
                this.tail = tmp;

                // creater pointers to swap locations
                let prev = null;
                let current = this.tail;
                let forward;
                
                while(current!==null){
                    forward = current.next;
                    current.next = prev;
                    prev = current;
                    current = forward;
                }
                return;
            }
        }
    }
}

const linkedList = new SinglyLL(11);
linkedList.insertAtEnd(22);
linkedList.insertAtEnd(33);
console.log(linkedList);

linkedList.reverse();
console.log(linkedList)