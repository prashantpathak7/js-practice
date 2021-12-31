function sumOfDigit(a) {
  let sum = 0;
  while (a != 0) {
    sum = sum + (a % 10);
    a = a - (a % 10);
    a = a / 10;
  }
  return sum;
}
console.log(sumOfDigit(6598));
