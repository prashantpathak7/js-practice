function sortArr(a) {
  for (j = 0; j < a.length - 1; j++) {
    for (i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let b = a[i];
        a[i] = a[i + 1];
        a[i + 1] = b;
      }
    }
  }
  return a;
}
console.log(sortArr([5, 51, 66, 125, 1, 8, 66, 94, 94, 10]));
