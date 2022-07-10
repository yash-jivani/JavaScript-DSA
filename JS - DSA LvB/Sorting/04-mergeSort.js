function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let myArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
        myArr.push(arr1[i]);
        i++;
        } else {
        myArr.push(arr2[j]);
        j++;
        }
    }

    while (i < arr1.length) {
        myArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        myArr.push(arr2[j]);
        j++;
    }
    return myArr;
}

var sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    let mid = Math.floor(nums.length / 2);
    
    // sortArray function divide array till arr.len = 1 
    let leftSide = sortArray(nums.slice(0, mid));
    let rightSide = sortArray(nums.slice(mid));
    // merge function  merge 2 sorted arrays
    return merge(leftSide, rightSide);
};

console.log(sortArray([2,1,3,5,4]))