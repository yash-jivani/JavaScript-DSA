function permutation(str, ans = "") {
  if (str.length === 0) {
    console.log(ans);
    return;
  }
  let char = str[0];
  for (let i = 0; i <= ans.length; i++) {
    // dry run it | example => 'abc'
    let first = ans.substring(0, i);
    let end = ans.substring(i, ans.length);
    permutation(str.slice(1), first + char + end);
  }
}

permutation("abc");
