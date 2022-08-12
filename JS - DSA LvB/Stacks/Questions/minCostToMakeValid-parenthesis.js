function minCost(str){
    
    let cost = 0;
    if(str.length%2!==0){
        return -1;
    }

    let myStack = [];
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(char==='('){
            myStack.push(char);
        }else{
            // if it is close closed brace
            if(myStack.length!==0){
                let popped = myStack.pop();

                if(popped === '('){
                    continue;
                }
                if(popped !== '('){
                    myStack.push(popped);
                    myStack.push(char);
                }
            }else{
                myStack.push(char)
            }
        }
    }

    let openBrace = 0;
    let closeBrace = 0;
    while(myStack.length!==0){
        if(myStack.pop() === '('){
            openBrace++;
        }else{
            closeBrace++;
        }
    }

    cost = Math.floor((openBrace+1)/2) + Math.floor((closeBrace+1)/2);
    return cost;
}

console.log(minCost("((()))"));
console.log(minCost("((()"));
console.log(minCost("(((("));
console.log(minCost("(((()"));