function checkmax(givenArray) {
  let max = givenArray[0];
  for (i = 1; i < givenArray.length; i++) {
    if (max < givenArray[i]) {
      max = givenArray[i];
    }
  }
  return max;
}
console.log(checkmax([64, 53, 98, 10, 5, 96]));
