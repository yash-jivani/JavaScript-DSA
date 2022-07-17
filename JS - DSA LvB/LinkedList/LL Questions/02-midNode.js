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
        // this.length = 1;
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

    // method 1 :
    midEle(){
        if(this.head === null){
            return -1;
        }else{
            let tmp = this.head;
            let count = 0;
            while(tmp!==null){
                count++;
                tmp = tmp.next;
            }
            let mid = Math.ceil(count/2);

            let midNode = this.head;
            while(mid!==0){
                mid--;
                midNode = midNode.next;
            }
            return midNode;
        }
    }

    // method 2 :
    midEle2(){
        if(this.head === null || this.head.next === null){
            return this.head;
        }
        
        let fast = this.head.next;
        if(fast.next===null){
            return fast;
        }else{
            let fast = this.head.next;
            let slow = this.head;
            while(fast!==null){
                fast = fast.next;
                if(fast !== null){
                    fast = fast.next;
                }
                slow = slow.next;
            }
            return slow;
        }
    }
}

let myLL = new LinkedList(2);
myLL.push(5);
myLL.push(6);
myLL.push(50);
myLL.push(51);
myLL.push(55);
// myLL.push(58);
console.log(myLL.midEle())
console.log(myLL.midEle2())