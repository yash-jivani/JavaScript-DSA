// sub-seq / sub-sets

function subSet(str, ans = "", arr) {
  if (str.length === 0) {
    arr.push(ans);
    return;
  }
  let char = str[0];
  subSet(str.slice(1), ans + char, arr); // add CHAR to the ans.
  subSet(str.slice(1), ans, arr); // ignore CHAR
}

const arr = [];
subSet("abc", "", arr);
console.log(arr);

// function subset2(str, ans = "") {
//   if (str.length === 0) {
//     let myArr = [];
//     myArr.push(ans);
//     return myArr;
//   }

//   let char = str[0];
//   let leftAns = subset2(str.slice(1), ans + char);
//   let rightAns = subset2(str.slice(1), ans);

//   leftAns.concat(rightAns);
//   return leftAns;
// }

// console.log(subset2("abc"));
