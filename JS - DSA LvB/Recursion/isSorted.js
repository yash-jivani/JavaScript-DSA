function isSorted(arr, index = 0) {
  if (index === arr.length - 1) {
    return true;
  }
  return arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
}

console.log(isSorted([1, 2, 3, 4, 5, 6]));
console.log(isSorted([1, 2]));
console.log(isSorted([5, 6, 2, 50]));
console.log(isSorted([5, 1]));
