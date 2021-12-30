function sumOfArray(givenArray) {
  let sum = 0;
  for (i = 0; i < givenArray.length; i++) {
    sum = sum + givenArray[i];
  }
  return sum;
}

console.log(sumOfArray([1, 10, 4]));
