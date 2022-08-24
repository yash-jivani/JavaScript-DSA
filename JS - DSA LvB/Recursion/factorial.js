function findFactorial(x) {
  if (x === 1) {
    return 1;
  }

  return x * findFactorial(x - 1);
}

console.log(findFactorial(6));