var permute = function (nums) {
    const result = [];

    function dfs(index, nums) {
        // base case
        if(index === nums.length) {
        result.push(nums.slice());
        return;
        }

        for (let j = index; j < nums.length; j++) {
        let tmp = nums[index];
        nums[index] = nums[j];
        nums[j] = tmp;

        dfs(index + 1, nums);

        // backtracking part
        tmp = nums[index];
        nums[index] = nums[j];
        nums[j] = tmp;
        }
    }

    dfs(0, nums);
    return result;
};


console.log(permute([1,2,3]))