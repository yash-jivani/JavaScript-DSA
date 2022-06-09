function arraySortedOrNot(arr, n) {
    // code here
    let  flag = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            flag++;
        }
    }
    if(flag){
        return 0;
    }
    else{
        return 1;
    }
}

console.log(arraySortedOrNot([1,2,3,4,0]))