function skipWord(str, word, ans = "") {
  if (str.length === 0) {
    return ans;
  }

  if (!str.startsWith(word)) {
    ans += str[0];
    return skipWord(str.slice(1), word, ans);
  }
  return skipWord(str.slice(5), word, ans);
}

console.log(skipWord("hello yash world", "yash"));
