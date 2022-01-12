//comapre 2 array using single for loop
// check whether element of second array are square of first array elements or not using single for loop

function same(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (i = 0; i < a.length; i++) {
    let c = b.indexOf(a[i] ** 2);
    if (c === -1) {
      return false;
    }
    b.splice(c, 1);
  }
  return true;
}
console.log(same([2, 4, 4], [16, 16, 4]));
