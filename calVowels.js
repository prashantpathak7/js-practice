function cal(a) {
  let b = 0;
  let c = 0;
  a = a.toUpperCase();
  for (i = 0; i < a.length; i++) {
    if (a[i] != ' ') {
      if (
        a[i] == 'A' ||
        a[i] == 'E' ||
        a[i] == 'I' ||
        a[i] == 'O' ||
        a[i] == 'U'
      ) {
        b = b + 1;
      } else {
        c = c + 1;
      }
    }
  }
  return [b, c];
}

console.log(cal('Be the change that you wish to see in the world'));
