function getPairsCount(arr,n,k){
    //code here
    let count = 0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]+arr[j]===k){
                count++;
            }
        }
    }
    return count;
}

console.log(getPairsCount([1,5,7,1],4,6))

