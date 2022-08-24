let revNum = 0;
function reverseNumber(x) {
  if (x === 0) {
    return 0;
  }
  let tmp = x % 10;
  revNum = revNum * 10 + tmp;
  reverseNumber(Math.floor(x / 10));
}

reverseNumber(123456);
console.log(revNum);
