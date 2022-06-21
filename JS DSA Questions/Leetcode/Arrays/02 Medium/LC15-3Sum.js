// brute force solution

var threeSum = function(nums) {
    let mySolution = []

    // sort array
    nums.sort((a,b)=>{return a-b})

    // set one pointer constant
    for( let currentPointer = 0;currentPointer<nums.length-1;currentPointer++){

        // skip next value > if next value is same
        if(currentPointer===0 || (currentPointer>0 && nums[currentPointer] !== nums[currentPointer-1])){
            let low = currentPointer+1; // set low pointer right after current pointer
            let high = nums.length-1;   // set high pointer at last
            let sum = 0 - nums[currentPointer];     // formula 

            while(low<high){    

                if(nums[low]+nums[high] === sum){

                    mySolution.push([nums[currentPointer],nums[low],nums[high]])

                    while(low<high && nums[low]===nums[low+1]){     // if next value is same thn skip
                        low++;
                    }
                    while(low<high && nums[high]===nums[high-1]){    // if next value is same thn skip
                        high--; 
                    }
                    // after that we have to shift one step to get diff. value
                    low++;
                    high--;
                }

                // if sum is less thn > we must have to shift our low pointer to get near to the answer (bcoz array is sorted)
                else if(nums[low]+nums[high] < sum){
                    low++;
                }
                // if sum is less thn > we must have to shift our hgih pointer to get near to the answer (bcoz array is sorted)
                else if(nums[low]+nums[high]> sum){
                    high--;
                }
            }
        }
    }
    return mySolution;
};

console.log(threeSum([-1,0,1,2,-1,-4])); 
