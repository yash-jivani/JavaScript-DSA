function phoneNumeric(str, ans = "") {
  if (str.length === 0) {
    // console.log(ans);
    let myArr = [];
    myArr.push(ans);
    return myArr;
  }
  let digit = Number.parseInt(str[0]);
  let myArr2 = [];
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let char = String.fromCharCode(97 + i);
    myArr2.push(...phoneNumeric(str.slice(1), ans + char));
  }
  return myArr2;
}

console.log(phoneNumeric("12"));
