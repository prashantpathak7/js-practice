function fibonacci(number) {
  let a = 0;
  let b = 1;
  let series = [];
  for (i = 0; i < number; i++) {
    series.push(a);
    let c = a;
    a = a + b;
    b = c;
  }
  return series;
}
console.log(fibonacci(11));
