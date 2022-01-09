function gcd(a, b) {
  let c;
  for (i = 0; i <= a && i <= b; i++) {
    if (a % i == 0 && b % i == 0) {
      c = i;
    }
  }
  return c;
}

console.log(gcd(150, 110));
