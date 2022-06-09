function countOddEven(arr,n){
    //Your code here
    let even =0;
    let odd = 0;
    for(let i=0;i<n;i++){
        if(arr[i]%2===0){
            even++;
        }
        else{
            odd++;
        }
    }
    return `${odd} ${even}`;
    
}

console.log(countOddEven([1,2,3,4,5],5))