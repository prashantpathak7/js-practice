const givenArray = [64, 23, 1, 10, 46];
let highestInArray = 0;
for (i = 0; i < givenArray.length; i++) {
  for (j = 0; j < givenArray.length; j++) {
    if (givenArray[i] < givenArray[j]) {
      highestInArray = givenArray[j];
    }
  }
}
console.log(`Highest Number in given array is ${highestInArray}`);
