var compress = function (chars) {
  
  let i = 0;   // for traverse chars
  let ansIndex = 0;    // char. ke count ko store karke main array me store karne ke liye
  let n = chars.length;

  while (i < n) {
    let j = i + 1;
    // while found same char
    while (j < n && chars[i] === chars[j]) {
      j++;
    }

    // store char
    chars[ansIndex] = chars[i];
    ansIndex++;

    // count char
    let count = j - i;

    if (count > 1) {
      let str = count.toString();
      for (let i of str) {
        chars[ansIndex] = i;
        ansIndex++;
      }
    }
    // moving to next char.
    i = j;
  }
  return ansIndex;
};

