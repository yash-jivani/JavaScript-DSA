// LC - 1342

function helper(num, count = 0) {
  if (num === 0) {
    return count;
  }
  if (num % 2 === 0) {
    return helper(Math.floor(num / 2), ++count);
  }
  return helper(Math.floor(num - 1), ++count);
}

var numberOfSteps = function (num) {
  let count = 0;
  return helper(num, count);
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(143));
console.log(numberOfSteps(10));
