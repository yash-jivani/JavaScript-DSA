
function insertAtBottom(stk,value){

    let stack = stk;
    let tmpStack = [];
    while(stack.length!==0){
        tmpStack.push(stack.pop());
    }

    stack.push(value);

    while(tmpStack.length!==0){
        stack.push(tmpStack.pop());
    }

    return stack;
}


let stack = [1,2,3,4];
let stack2 = [11];
console.log(insertAtBottom(stack,88));
console.log(insertAtBottom(stack2,88));