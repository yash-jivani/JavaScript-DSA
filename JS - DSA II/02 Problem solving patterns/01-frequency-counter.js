/*

Write a function called "squared" which takes two arrays, 
the function should return true if every value in the array has it's coresponding value squared in the second array. 
The frequency of values must be the same.

example : 
squared([1,2,4],[16,1,4]) -> true
squared([1,3,4],[9,4,16]) -> false
squared([1,1,4],[16,1]) -> false

*/

// brute force solution | O(n^2)

function squared(arr1,arr2){

    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0 ; i<arr1.length;i++){
        let foundIndex = arr2.indexOf(arr1[i] ** 2);    // find index in 2nd array of ith value (value**2)
        arr2.splice(foundIndex,1)       // startfrom given index and remove 1 element from array
        if(foundIndex===-1){        // if index == -1 | index not found 
            return false;
        }
    }
    return true;

}

console.log(squared([1,2,4],[16,1,4]));
console.log(squared([1,3,4],[9,4,16]));
console.log(squared([1,1,4],[16,1]));


// * Frequency counter algo. solution | O(n)

function squared2(arr1,arr2){
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let num of arr1){
        if(!(frequencyCounter1[num])){
            frequencyCounter1[num] = 1
        }
        else{
            frequencyCounter1[num]++;
        }
    }

    for(let num of arr2){
        if(!(frequencyCounter2[num])){
            frequencyCounter2[num] = 1
        }
        else{
            frequencyCounter2[num]++;
        }
    }

    // console.log(frequencyCounter1)
    // console.log(frequencyCounter2)

    for(let key in frequencyCounter1){
        // ager key**2 freq.2 me present nhi h to...
        if(!(key**2) in frequencyCounter2){
            return false
        }

        // ager dono ke pass same value nhi hai same key ke liye
        if(frequencyCounter1[key]!==frequencyCounter2[key**2]){
            return false;
        }
    }
    return true
}


console.log(squared2([1,2,4],[16,1,4]));
console.log(squared2([1,3,4],[9,4,16]));
console.log(squared2([1,1,4],[16,1]));





