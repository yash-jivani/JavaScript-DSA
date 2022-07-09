function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let swapp = false;
        for(let j=0;j<arr.length-(i+1);j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                swapp = true;
            }
        }
        if(swapp === false){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,5,3,4,2]))
console.log(bubbleSort([1,2,3,4,5]))