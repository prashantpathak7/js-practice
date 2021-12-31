function isPrime(a) {
  if (a == 1) {
    return false;
  } else if (a == 2 || a == 3) {
    return true;
  } else if (a > 3) {
    for (i = 2; i * i <= a; i++) {
      if (a % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}
console.log(isPrime(97));
