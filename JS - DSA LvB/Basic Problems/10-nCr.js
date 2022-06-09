function factorial(num){
    let ans = 1;
    for(let i = 1; i<=num;i++){
        ans *= i;
    }
    return ans;
/*
    with resursion 
    if(num===1){
            return 1;
        }
    
    return num * factorial(num-1);
    */
}

function nCr(n,r){
    let ans = factorial(n) / (factorial(r) * factorial(n-r))
    return ans;
}

console.log(nCr(8,2));