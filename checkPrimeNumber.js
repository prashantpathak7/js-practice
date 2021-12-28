const givenNumber = 456785;
let a = 'a Prime';
for (i = 3; givenNumber > i; i++) {
  if (givenNumber % i == 0) {
    a = 'not a Prime';
  }
}
console.log(`${givenNumber} is ${a} number`);
