const givenString = 'racecar';
const a = givenString.length - 1;
let newString = givenString[a];

for (i = a - 1; i >= 0; i--) {
  newString = newString + givenString[i];
}

if (newString == givenString) {
  console.log(`${givenString} is a Palindrome string`);
} else {
  console.log(`${givenString} is not a Palindrome string`);
}
