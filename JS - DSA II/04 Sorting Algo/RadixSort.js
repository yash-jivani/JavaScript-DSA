
function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num===0){
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigitLength(num){
    let maxLen = 0;
    for(let i=0;i<num.length;i++){
        maxLen = Math.max(maxLen , digitCount(num[i]));
    }
    return maxLen;
}

function radixSort(nums){
    let maxDigitlen = maxDigitLength(nums);
    for(let k=0;k<maxDigitlen;k++){
        let digitBuckets = Array.from({length:10}, ()=>[]);
        for(let i=0;i<nums.length;i++){
            let digit =getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    } 
    return nums;
}

console.log(radixSort([2,1,4,55,1,45,2]))
