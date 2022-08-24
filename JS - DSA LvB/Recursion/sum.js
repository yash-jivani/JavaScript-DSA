function sum(x){
    if(x===1){
        return 1;
    }
    return x+sum(x-1);
}
console.log(sum(5));