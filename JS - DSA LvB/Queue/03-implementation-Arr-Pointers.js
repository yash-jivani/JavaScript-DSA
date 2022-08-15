class MyQueue {
    
    constructor(){
		this.front = 0;
		this.rear = 0;
		this.arr = new Array(100005);
	}
    
	//Function to push an element x in a queue.
	push(x)
	{
	    // Your code here
        if(this.rear === this.arr.length){
            return -1;
        }else{
            this.arr[this.rear] = x;
            this.rear++;
        }
	} 
	
    //Function to pop an element from queue and return that element.
	pop()
	{
		// Your code here
        if(this.front === this.rear){
            return -1;
        }else{
            let tmp  = this.arr[this.front];
            this.arr[this.front] = -1;
            this.front++;
            return tmp;
        }
	} 
}

let myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.push(4); 
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())
console.log(myQueue.pop())