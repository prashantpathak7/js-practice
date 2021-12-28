const givenArray = [10, 12, 15, 5, 66, 1, 19, 42, 18, 65, 89, 97];
const SearchingElement = 97;
let elementStatus = 'Not Present';

for (i = 0; i < givenArray.length; i++) {
  if (SearchingElement == givenArray[i]) {
    elementStatus = 'present';
  }
}
console.log(`number ${SearchingElement} is ${elementStatus} in an Array`);
