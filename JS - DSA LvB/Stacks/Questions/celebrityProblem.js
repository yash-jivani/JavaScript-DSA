// everybody knows celebrity 
// but celebrity knows no one


function knows(M,a,b,n){
    if(M[a][b]===1){
        return true;
    }else{
        return false;
    }
}
    
function celebrity(M, n){
    let myStack = [];
    
    // push all rows into stack
    for(let i=0;i<n;i++){
        myStack.push(i);
    }
    
    while(myStack.length>1){
        let a = myStack.pop();
        let b = myStack.pop();
    
        // if a knows b thn push b else push a
        if(knows(M,a,b,n)){
            myStack.push(b);
        }else{
            myStack.push(a);
        }
    }
    
    let possibleCelebRow = myStack.pop();

    // verify 
    let checkRow = false;
    let zeroCount = 0;
    
    for(let i=0;i<n;i++){
        if(M[possibleCelebRow][i]===0){
            zeroCount++;
        }
    }
    
    if(zeroCount===n){
        checkRow = true;
    }
    
    let checkCol = false;
    let oneCount = 0;
    
    for(let i=0;i<n;i++){
        if(M[i][possibleCelebRow]===1){
            oneCount++;
        }
    }
    
    if(oneCount===n-1){     // ignore diagonal element (self) => n-1
        checkCol = true;
    }
    
    if(checkCol===true && checkRow===true){
        return possibleCelebRow;
    }else{
        return -1;
    }
}

let martix = [
    [0,1,0],
    [0,0,0],
    [1,1,0]
]
let martix2 = [
    [1,0,0],
    [0,0,0],
    [1,0,1]
]

console.log(celebrity(martix,martix.length))
console.log(celebrity(martix2,martix2.length))


