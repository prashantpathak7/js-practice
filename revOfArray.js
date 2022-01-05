function rev(a) {
  for (i = 0; i < a.length / 2; i++) {
    let b = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = b;
  }
  return a;
}
console.log(rev([10, 20, 30, 40, 50]));
