// brute force solution

var twoSum2 = function(nums, target) {
    let solutionArr = [];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                solutionArr.push(i);
                solutionArr.push(j);
                
            }
        }
    }
    return solutionArr;
};

console.log(twoSum2([2,7,11,15],9));
console.log(twoSum2([3,2,4],6));
console.log(twoSum2([3,3],6));
console.log(twoSum2([3,2,3],6));


// optimal solution

// a + b = target => target - a = b

var twoSum = function(nums,target){
    let myMap = {}
    for(let i=0;i<nums.length;i++){
        let value = nums[i];
        let pair = target - nums[i];
        if(myMap[pair]!==undefined){
            return [myMap[pair],i]
        }else{
            myMap[nums[i]] = i;
        }
    }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,3],6));