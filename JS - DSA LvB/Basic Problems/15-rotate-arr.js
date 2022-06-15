var rotate = function (nums, k) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }

  nums = temp;
  console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
