// T.C = O(N) | S.C = O(N)

let stack = [];

let str = "yash";

// push into stack
for(let i =0;i<str.length;i++){
    stack.push(str[i]);
}

let revStr = "";
// pop from stack
while(stack.length!==0){
    revStr = revStr + stack.pop();
}

console.log(revStr);