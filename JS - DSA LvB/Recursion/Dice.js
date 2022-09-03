function dice(target, ans = "") {
  if (target === 0) {
    console.log(ans);
    return;
  }
  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(target - i, ans + i);
  }
}

dice(4);
