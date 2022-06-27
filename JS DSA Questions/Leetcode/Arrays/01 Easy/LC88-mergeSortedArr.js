// with creating 3rd array
var merge2 = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let arr = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < n) {
    arr.push(nums2[j]);
    j++;
  }
  return arr;
};

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// without creating another array
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fval = nums1[first];
    let sval = nums2[second];

    if (fval > sval) {
      nums1[i] = fval;
      i--;
      first--;
    } else {
      nums1[i] = sval;
      i--;
      second--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
