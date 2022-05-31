// * Get node at given index

class Node{
    constructor(value){
        this.value = value;
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
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    get(index){
        
        // if try to access negative index OR more than LL length
        if(index<0 || index>=this.length){
            return 'invalid index'
        }
        
        let tmp = this.head;
        for(let i=0;i<index;i++){
            tmp = tmp.next;
        }
        return tmp
    }

    set(index,value){
        if(index<0 || index>=this.length){
            console.log("---- invalid index----");
        }else{
            let tmp = this.head;
            for(let i = 0 ; i< index;i++){
                tmp = tmp.next;
            }
            tmp.value = value
        }

    }
}

let myLL = new LinkedList(4); // 0 

myLL.push(5);       // 1
myLL.push(56);      // 2 
myLL.push(576);     // 3
myLL.push(76)       // 4

myLL.set(20,999)
myLL.set(2,999)

console.log(myLL)