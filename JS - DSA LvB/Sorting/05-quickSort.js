
function partition(arr,start,end){
    
    let pivotEle = arr[start];
    let count = 0;

// find all ele. which is less thn pivotEle 
    for(let i=start+1;i<=end;i++){
        if(arr[i]<=pivotEle){
            count++;
        }
    }

// calc. original index of pivot index
    let originalPivotIndex = count + start;

// swap pivotEle to original position
    let tmp = arr[start]
    arr[start] = arr[originalPivotIndex];
    arr[originalPivotIndex] = tmp;
/*
    ! This will only change the value of "pivotEle" variable (it will not change original array)
    let tmp = arr[pivotIndex];
    arr[pivotIndex] = pivotEle;
    pivotEle = tmp;
*/

    // Move all smaller ele. to left and greater to right
    let i=start;
    let j=end;
    while(i<originalPivotIndex && j>originalPivotIndex){
        while(arr[i]<=pivotEle){
            i++;
        }
        while(arr[j]>pivotEle){
            j--;
        }
        if(i<originalPivotIndex && j>originalPivotIndex){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            // i++;
            // j--;
        }
    }
    return originalPivotIndex;
}

function quickSort(arr,start,end){
    if(start>=end){
        return;
    }
    let pivotIndex = partition(arr,start,end);
    // left portion
    quickSort(arr,start,pivotIndex-1);
    // right portion
    quickSort(arr,pivotIndex+1,end);
}

let myArr = [2,45,1,6,5,20]
quickSort(myArr,0,myArr.length-1);
console.log(myArr)