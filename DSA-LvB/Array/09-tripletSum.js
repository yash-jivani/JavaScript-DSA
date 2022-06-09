function find3Numbers(A, n, X)
{
    //your code here
    let count = 0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let k=j+1;k<n;k++){
                if(A[i]+A[j]+A[k]===X){
                    count++;
                }
            }
        }
    }
    return count;
}

console.log(find3Numbers([1, 4, 45, 6, 10, 8],6,13))

// brute-force code: