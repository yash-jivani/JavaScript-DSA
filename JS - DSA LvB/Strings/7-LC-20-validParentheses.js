
var isValid = function(s) {
    let myStack = [];
    let pairMap = {"(":")","{":"}","[":"]"};
    
    for(let i=0;i<s.length;i++){
        if(pairMap[s[i]]){
            myStack.push(s[i])
        }
        else if(s[i] !== pairMap[myStack.pop()]){
            return false;
        }
    }
    return myStack.length===0;
};

console.log(isValid("(){}[]"))
console.log(isValid("()[{}]"))
console.log(isValid("([{)}]"))
console.log(isValid("("))