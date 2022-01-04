function facto(a) {
  for (let i = a - 1; i > 1; i--) {
    a = a * i;
  }
  return a;
}
console.log(facto(10));
