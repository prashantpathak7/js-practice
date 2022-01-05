function isPal(a) {
  //racecar
  for (i = 0; i < a.length / 2; i++) {
    if (a[i] !== a[a.length - 1 - i]) {
      return 0;
    }
  }
  return 1;
}
console.log(isPal('racecar'));
