function partition(arr,start,end){
    let pivotEle = arr[start];
    let count = 0;

    for(let i=start+1;i<arr.length;i++){
        if(arr[i]<=pivotEle){
            count++;
        }
    }

    let originalPivotIndex = count + start;

    let tmp = arr[start]
    arr[start] = arr[originalPivotIndex];
    arr[originalPivotIndex] = tmp;

    let i=start;
    let j=end;

    while(i<originalPivotIndex && j>originalPivotIndex){
        while(arr[i]<=pivotEle){
            i++;
        }
        while(arr[j]>pivotEle){
            j--;
        }
        // if(i<originalPivotIndex && j>originalPivotIndex){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        // }
    }
    return originalPivotIndex;s
}

function quickSort(arr,start,end){
    if(start>=end){
        return arr;
    }
    let pivotIndex = partition(arr,start,end);
    quickSort(arr,start,pivotIndex-1);
    quickSort(arr,pivotIndex+1,end);

    return arr;
}

var sortArray = function(nums) {

    quickSort(nums,0,nums.length-1);
    console.log(nums);
};

sortArray([2,4,5,6,3]);
sortArray([2,4,2,14,5,66]);