function merge2Array(arr1,arr2){
    let i=0;
    let j=0;
    let myArr = []
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            myArr.push(arr1[i]);
            i++;
        }else{
            myArr.push(arr2[j]);
            j++;
        }
    }
    
    while(i<arr1.length){
        myArr.push(arr1[i]);
        i++;
    }
    
    while(j<arr2.length){
        myArr.push(arr2[j]);
        j++;
    }
    
    return myArr;
    
}

var sortArray = function(nums) {
    if(nums.length<=1){
        return nums;
    }

    let mid = Math.floor(nums.length/2);

    let leftPart = nums.slice(0,mid);
    let rightPart = nums.slice(mid);

    // sortArray function divide array till len=1. > thn merge function merge them
    return merge2Array(sortArray(leftPart),sortArray(rightPart));
}

console.log(sortArray([5,2,3,1]));