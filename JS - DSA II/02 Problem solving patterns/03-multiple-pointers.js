/*

Multiple pointers : 
    creating pointers or values that correpond to an index or position and
    move towards the beginning, end or middle based on a certain condition.
- very efficient for solving problem with minimal space complexity as well
- NOTE : Array must be sorted.
*/

// example : find the first pair which sum is zero

// brute force solution | O(n^2)
function sum_zero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return [arr[i],arr[j]]
            }
        }
    }
}

console.log(sum_zero([-4,-3,-1,0,1,3,4,5]))


// Multiple pointer approach | O(n)
// pointer moves according to diff. req. and diff. conditions
function sum_zero2(arr){
    let left =0;
    let right = arr.length-1;
    while(left<right){
        let sum = arr[i]+arr[j];
        if(sum===0){
            return [arr[i],arr[j]]
        }
        else if(sum>0){
            right--;
        }
        else{
            left++;
        }
    }
    return 'Not Found!'
}

console.log(sum_zero([-4,-3,-1,0,1,3,4,5]))
