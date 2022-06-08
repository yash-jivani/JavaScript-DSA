/*

countUniqueValues :
- Implement a function called countUniqueValues, which accepts a sorted array, and 
    counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    example : countUniqueValues([1,1,1,2,3,]) -> 3
    example : countUniqueValues([1,1,1]) -> 1
    example : countUniqueValues([]) -> 0
    example : countUniqueValues([-2,-1,-1,0,1,2,2]) -> 5

*/


// without pointers
function countUniqueValues(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]-arr[i+1]!==0){
            count++;
        }
    }
    return count;
}

console.log(countUniqueValues([1,1,1]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([1,1,2,2,3,3,3,3,4,4,4,5,5]))

// with pointers
function countUniqueValues2(arr){
    if(arr.length===0){
        return 0;
    }
    let i=0;
    let j=1;
    while(j<arr.length){
        if(arr[i]!==arr[j]){
            i++;
            arr[i] = arr[j];
        }
        j++;

    }
    return (i+1);
}

console.log(countUniqueValues2([1,1,1]))
console.log(countUniqueValues2([]))
console.log(countUniqueValues2([1,1,2,2,3,3,3,3,4,4,4,5,5]))
