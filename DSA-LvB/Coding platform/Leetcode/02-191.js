function hammingWeight(n) {
    let count = 0
    while(n){
        if(n&1){
            count++;
        }
        n = n>>1;
    }    
    return count;
};

console.log(hammingWeight(00000000000000000000000000001011))