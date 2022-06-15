function pushZerosToEnd(arr,n){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] !== 0){
            let temp=arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }
    return arr
}

console.log(pushZerosToEnd([1,0,2,0,3,4],6))
