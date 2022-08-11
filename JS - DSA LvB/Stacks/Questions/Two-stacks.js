
class TwoStacks
{
    
    constructor(){
        this.arr = new Array(100);
        this.size = 100;
        this.top1 = -1;
        this.top2 = 100;
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack1.
    push1(x){
        // code here
        if(this.top2 - this.top1 > 1){
            this.top1++;
            this.arr[this.top1] = x;
        }
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack2.
    push2(x){
        // code here
        if(this.top2 - this.top1 > 1){
            this.top2--;
            this.arr[this.top2] = x;
        }
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack1.
    pop1(){
        // code here
        if(this.top1>=0){
            let data = this.arr[this.top1];
            this.top1--;
            return data;
        }else{
            return -1;
        }
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack2.
    pop2(){
        // code here
        if(this.top2<this.arr.length){
            let data = this.arr[this.top2];
            this.top2++;
            return data;
        }else{
            return -1;
        }
    }
}
