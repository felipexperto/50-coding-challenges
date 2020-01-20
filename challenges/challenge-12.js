// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function isPositive(value) {
  return value >= 0;
}
const returnPositiveValues = arr => {
  const positiveArray = [];
  positiveArray.push( arr.filter(isPositive) );
  return positiveArray;
}
console.log(returnPositiveValues([-10, 5, -25, -120]));