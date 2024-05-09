function countDigits(num) {
  if (num <= 0) return;

  let numberOfDigits = 0;
  while (num !== 0) {
    num = parseInt(num / 10);
    numberOfDigits++;
  }
  return numberOfDigits;
}

console.log(countDigits(325));
console.log(countDigits(12132321312));
console.log(countDigits(321321325));
console.log(countDigits(0));
console.log(countDigits(-1212));
console.log(countDigits(312312325));
