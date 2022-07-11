
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
    let pivotIndex = count+start;

// swap pivotEle to original position
    let tmp = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = tmp;
/*
    ! This will only change the value of "pivotEle" variable (it will not change original array)
    let tmp = arr[pivotIndex];
    arr[pivotIndex] = pivotEle;
    pivotEle = tmp;
*/

    // Move all smaller ele. to left and greater to right
    let i=start;
    let j=end;
    while(i<pivotIndex && j>pivotIndex){
        while(arr[i]<=pivotEle){
            i++;
        }
        while(arr[j]>pivotEle){
            j--;
        }
        if(i<pivotIndex && j>pivotIndex){
            let tmp2 = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp2;
            // i++;
            // j--;
        }
    }
    return pivotIndex;
}


function quickSort(arr,start,end){
    if(start>=end){
        return ;
    }
    let pivotIndex = partition(arr,start,end);
    // left portion
    quickSort(arr,start,pivotIndex-1);
    // right portion
    quickSort(arr,pivotIndex+1,end);
}


var sortArray = function(nums) {

    quickSort(nums,0,nums.length-1);
    console.log(nums);
};

sortArray([2,4,5,6,3]);
sortArray([2,4,2,14,5,66]);