function countZeros(x,count=0){
    if(x===0){
        return count;
    }
    let tmp = x%10;
    if(tmp===0){
        return countZeros(Math.floor(x/10),++count);
    }
    return countZeros(Math.floor(x/10),count);
}

console.log(countZeros(2000));
console.log(countZeros(20000));