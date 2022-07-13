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

    insertAtIndex(value,index){
        if(index<0 || index > this.length){
            console.log("🛑 Invalid Index")
            return
        }
        else{
            const newNode = new Node(value);
            if(index===this.length){
                // insert At end
                this.tail.next = newNode;
                this.tail = newNode;
            }
            else if(index===0){
                // insert at beginning
                newNode.next = this.head;
                this.head = newNode;
            }
            else{
                // insert at index 
                let tmp = this.head;
                while(index-1!==0){
                    tmp = tmp.next;
                    index--;
                }
                newNode.next= tmp.next;
                tmp.next = newNode;
            }
            this.length++;
        }
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
}

const linkedList = new SinglyLL(11);
linkedList.insertAtIndex("A",0);    
linkedList.insertAtIndex(22,1);    
linkedList.insertAtIndex(99,3);  

console.log(linkedList.traversal())
// console.log(linkedList);