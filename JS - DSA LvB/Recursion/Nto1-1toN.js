function Nto1(x) {
  if (x === 1) {
    console.log(x);
    return;
  }
  console.log(x);
  Nto1(x - 1);
  console.log(x);
}

Nto1(5);
