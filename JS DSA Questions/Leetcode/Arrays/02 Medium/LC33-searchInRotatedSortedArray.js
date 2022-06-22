
// linear search

var search2 = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
    }
    return -1;
};

console.log(search2([4,5,6,0,1,2],0))
console.log(search2([4,5,6,0,1,2],22))
console.log(search2([2,1],1))
console.log(search2([56,1,55],60))

// binary search solution 

var search = function(nums, target) {
    let firstIndex  = nums[0];
    let pivotEle = -1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<firstIndex){
            pivotEle = i;
            break;
        }
    }

    if(target<nums[0]){
        let start = pivotEle;
        let end = nums.length;
        let mid = Math.floor((start+end)/2)
        while(start<end){
            if(nums[mid]===target){
                return mid;
            }
            else if(nums[mid]<target){
                start = mid+1;

            }
            else if(target<nums[mid]){
                end = mid;
            }
            mid = Math.floor((start+end)/2)
        }
        return -1;

    }
    else if(target>=nums[0]){
        let start = 0;
        let end = pivotEle-1;
        let mid = Math.floor((start+end)/2);
        while(start<end){
            if(nums[mid]===target){
                return mid;
            }
            else if(nums[mid]<target){
                start = mid+1;

            }
            else if(target<nums[mid]){
                end = mid;
            }
            mid = Math.floor((start+end)/2)
        }
        return -1;
    }

};

console.log(search([4,5,6,0,1,2],0))
console.log(search([4,5,6,0,1,2],22))
console.log(search([2,1],1))
console.log(search([56,1,55],60))