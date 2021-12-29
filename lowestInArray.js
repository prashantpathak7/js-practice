function minArray(givenArray) {
  let min = givenArray[0];
  for (i = 1; i < givenArray.length; i++) {
    if (min > givenArray[i]) {
      min = givenArray[i];
    }
  }
  return min;
}
console.log(minArray([12, 65, 94, 31]));
