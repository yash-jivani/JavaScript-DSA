function deleteMid(s)
{    
    let tmpStack = [];
    let count = Math.floor(s.length/2);
    while(count!==0){
        tmpStack.push(s.pop());
        count--;
    }
    s.pop();
    while(tmpStack.length!==0){
        s.push(tmpStack.pop());
    }
    return s;
}

let myStack = [1,2,3,4,5];
let myStack2 = [1,2,3,4];
console.log(deleteMid(myStack));
console.log(deleteMid(myStack2));