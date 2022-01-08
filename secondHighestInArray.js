function sndLowest(a) {
  for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
        let b = a[j + 1];
        a[j + 1] = a[j];
        a[j] = b;
      }
    }
  }
  return a[a.length - 2];
}
console.log(sndLowest([2, 5, 8, 3, 12, 11]));
