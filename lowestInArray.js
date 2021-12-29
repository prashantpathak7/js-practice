const givenArray = [12, 65, 94, 1, 31];
let lowestNumber = 0;
for (i = 0; i < givenArray.length; i++) {
  for (j = 0; j < givenArray.length; j++) {
    if (givenArray[i] > givenArray[j]) {
      lowestNumber = givenArray[j];
    }
  }
}
console.log(`lowest number in array is ${lowestNumber}`);
