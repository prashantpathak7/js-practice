function lcm(a, b) {
  let c;
  let d;
  if (a > b) {
    c = a;
    d = b;
    1;
  } else {
    c = b;
    d = a;
  }
  while (c != 0) {
    if (c % d == 0) {
      return c;
    }
    c = c + c;
  }
}

console.log(lcm(162, 32));
