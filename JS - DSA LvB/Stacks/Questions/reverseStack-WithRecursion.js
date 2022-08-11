
function insertAtBottom(stk,value){

    // stack ki length zero => time to insert ele (top pointer position = bottom)
    if(stk.length===0){
        stk.push(value);
        return
    }

    // save ele
    let ele = stk.pop();

    // recursive call 
    insertAtBottom(stk,value);

    // insert saved ele at bottom
    stk.push(ele);
}

function reverseStack(stack){
    if(stack.length===0){
        return;
    }

    // save Element
    let ele = stack.pop()

    // recursive call
    reverseStack(stack);
    
    // insert saved ele at bottom function
    insertAtBottom(stack,ele)

}

let myStack = [1,2,3,4,5];
let myStack2 = [1,2];
let myStack3 = [1];
reverseStack(myStack)
reverseStack(myStack2)
reverseStack(myStack3)
console.log(myStack)
console.log(myStack2)
console.log(myStack3)