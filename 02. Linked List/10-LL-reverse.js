class Node{
    constructor(value){
        this.value  = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value)
        if(this.head===null){
            this.head=newNode;
            this.tail= newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    revrseLL(){
        // swapping head and tail pointer
        let tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;

        // create prev next pointers 
        let prev = null;
        let next;

        for(let i=0;i<this.length;i++){
            // logic
            next = tmp.next;  // chnge next pointer to tmp.next
            tmp.next = prev;  // tmp.next pointer to prev pointer 
            prev = tmp;       // prev points to tmp pointer 
            tmp = next        // tmp points to next pointer
        }
    }
}

let myLL = new LinkedList(2);
myLL.push(5);
myLL.push(6);
myLL.push(50);
myLL.revrseLL();
console.log("\n\t\t:: Reversed :: \n",myLL)
