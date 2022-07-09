function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let valueOFi = arr[i];
        let j = i-1;
        while((valueOFi < arr[j])  && j>=0){
            arr[j+1] = arr[j];
            j--; 
        }
        arr[j+1] = valueOFi;
    }
    return arr;
}

console.log(insertionSort([2,4,3,1]))
console.log(insertionSort([2,4,3,1]))