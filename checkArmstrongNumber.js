const givenNumber = 370;
let numberString = '0';
let a = givenNumber;
let sum = 0;
while (a != 0) {
  numberString = numberString + (a % 10);
  a = a - (a % 10);
  a = a / 10;
}
for (i = 0; i < numberString.length; i++) {
  sum = sum + Number(numberString[i]) ** 3;
}
console.log(sum);
if (sum == givenNumber) {
  console.log(`${givenNumber} is an Armstrong Number`);
} else {
  console.log(`${givenNumber} is Not an Armstrong Number`);
}
