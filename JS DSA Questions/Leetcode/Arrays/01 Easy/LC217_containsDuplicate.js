var containsDuplicate = function(nums) {

    let visitedNum = {};

    for(let i=0;i<nums.length;i++){
        
        if(visitedNum[nums[i]]){
            return true;
        }else{
            visitedNum[nums[i]] = true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,5]))