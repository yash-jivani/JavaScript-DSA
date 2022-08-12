function redundantBracket(str){
    
    let myStack = [];

    for(let i=0;i<str.length;i++){
        let currChar = str[i];
        if(currChar==="(" || currChar === "+" || currChar === "-" || currChar === "*" || currChar === "/"){
            myStack.push(currChar);
        }
        else{
            if(currChar===")"){
                let poppedChar = myStack.pop();
                if(poppedChar == "+" || poppedChar === "-" || poppedChar === "*" || poppedChar === "/"){
                    console.log('success');
                }
                else{
                    console.log('failure');
                    return false;
                }
                myStack.pop();
            }
        }
    }
    
    return true;
}

console.log(redundantBracket('(((a+b)))'))
console.log(redundantBracket('(a+b)+c*d'))
console.log(redundantBracket('a+b*(c/d)'))