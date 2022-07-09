function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j;
            }
        }
        if(i!==minIndex){
            let tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    return arr;
}

console.log(selectionSort([2,4,3,1]))
console.log(selectionSort([2,4,3,1]))