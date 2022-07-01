var sortedSquares = function(nums) {

    // set 2 pointers 
    let left = 0;
    let right = nums.length-1;
    // create new array
    let resultArr = new Array(nums.length).fill(0);
    // set pointer on created array
    let currentIndexOfResultArr = nums.length-1;
    
    while(left<=right){

        // left and right pointer value squr
        let leftSqur = Math.pow(nums[left],2);
        let rightSqur = Math.pow(nums[right],2);
      
        // if left Pointer value's squr is higher thn insert in result array
        if(leftSqur>rightSqur){
            resultArr[currentIndexOfResultArr] = leftSqur;
            left++;
            currentIndexOfResultArr--;
        }
        // else insert right pointer's squr value
        else{
            resultArr[currentIndexOfResultArr] = rightSqur;
            right--;
            currentIndexOfResultArr--;
        }
    }
    
    return resultArr;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));