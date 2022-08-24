function sumOfDigit(x){
    if(x===0){
        return x;
    }
    let tmp = x%10;
    x = Math.floor(x/10);
    return tmp + sumOfDigit(x);
}

console.log(sumOfDigit(134219))