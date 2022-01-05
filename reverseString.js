function reverse(a) {
  let b = '';
  for (i = a.length - 1; i >= 0; i--) {
    b = b + a[i];
  }
  return b;
}

console.log(reverse('Prashant'));
