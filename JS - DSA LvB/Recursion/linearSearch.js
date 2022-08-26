function linearSearch(arr, target, index = 0) {
  if (arr[index] === target) {
    return true;
  }
  if (index === arr.length) {
    return false;
  }
  return linearSearch(arr, target, index + 1);
}

console.log(linearSearch([2, 4, 1, 5, 3, 9], 5, 0));
console.log(linearSearch([2, 4, 1, 5, 3, 9], 55, 0));
console.log(linearSearch([2, 4], 4, 0));
console.log(linearSearch([2], 55, 0));
