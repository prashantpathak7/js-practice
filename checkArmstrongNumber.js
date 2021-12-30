function isArmstrong(givenNumber) {
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

  if (sum == givenNumber) {
    return true;
  } else {
    return false;
  }
}

console.log(isArmstrong(370));
