function gcd(a,b){
    if(a===0){
        return b;
    }
    if(b===0){
        return a;
    }

    while(a!==b){
        if(a>b){
            a = a-b;
        }
        else if(b>a){
            b = b-a;
        }
    }
    // return a;
    return b;

}

console.log(gcd(72,24))
console.log(gcd(78,36))