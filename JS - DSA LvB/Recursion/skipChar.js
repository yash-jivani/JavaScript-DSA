// skip / remove "a" from string
function skipChar(str, index = 0, ans = "") {
  if (index === str.length) {
    return ans;
  }
  if (str[index] !== "a") {
    ans += str[index];
  }
  return skipChar(str, index + 1, ans);
}

console.log(skipChar("yash"));
console.log(skipChar("yaassh"));

function skipChar2(str, ans = "") {
  if (str.length === 0) {
    return ans;
  }
  if (str[0] !== "a") {
    ans += str[0];
  }
  str = str.slice(1);
  return skipChar2(str, ans);
}
console.log(skipChar2("yash"));
console.log(skipChar2("yaassh"));
