function expo(a,b){
    if(b===0){
        return 1;
    }
    if(b===1){
        return a;
    }

    let ans = expo( a, (Math.floor( b/2 )) )
    if(b%2===0){
        return ans * ans;
    }
    else{
        return a * ans * ans;
    }
}

console.log(expo(3,11))