function insertionSort(arr){
    let min 
    for(let i=0;i<arr.length;i++){
        min = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(i!==min){
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
}

let array1 = [5,1,4,3,8,6,7]
insertionSort(array1);
console.log(array1)