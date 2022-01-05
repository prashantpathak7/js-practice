// count for the occurance of perticular charecter in a string
function counter(a, b) {
  //prashant //a
  let n = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
      n = n + 1;
    }
  }
  return n;
}

console.log(counter('prashant', 'a'));
