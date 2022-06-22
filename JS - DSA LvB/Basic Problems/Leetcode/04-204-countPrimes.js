// Sieve of Eratosthenes

var countPrimes = function(n) {
    let count = 0;
    let primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;
    for(let i=2;i<primes.length;i++){
        if(primes[i]){
            count++;
            for(let j=i*2;j<primes.length;j=j+i){
                primes[j]  = false;
            }
        }
    }
    return count
};

console.log(countPrimes(10))
console.log(countPrimes(5000000))