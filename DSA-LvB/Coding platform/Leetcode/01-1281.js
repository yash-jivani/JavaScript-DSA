function subtractProductAndSum(n) {
    let tmp = n;
    let sum = 0;
    let product = 1;
    let value;
    while(tmp>0){
        value = tmp %10;
        sum += value;
        product *= value;
        tmp = Math.floor(tmp/10);
    }
    
    return (product-sum);
};

console.log(subtractProductAndSum(234))