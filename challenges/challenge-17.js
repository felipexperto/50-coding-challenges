// Calculate the sum of digits of a positive integer number

const isInteger = (num) => num % 1 === 0;
const isPositive = (num) => num >= 0;

const sumDigits = (num) => {
  if (!isInteger(num) || !isPositive(num)) return;

  const result = num
    .toString()
    .split('')
    .map(item => parseInt(item))
    .reduce((accumulator, item) => accumulator += item);

  console.log( result );
}

sumDigits(123456789);