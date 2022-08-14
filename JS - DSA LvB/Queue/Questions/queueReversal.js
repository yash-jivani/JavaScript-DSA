//User function Template for javascript

/**
 * @param {Queue} q
 * @returns {Queue}
*/

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/

class Solution {
    //Function to reverse the queue.
    rev(q)
    {
        //your code here
        let myStack = [];
        while(!q.empty()){
            myStack.push(q.pop());
        }
        
        while(myStack.length!==0){
            q.push(myStack.pop())
        }
        
        return q;
    }
}