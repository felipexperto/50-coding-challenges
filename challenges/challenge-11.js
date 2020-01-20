// Calculate the average of the numbers in an array of numbers

const averageSumOfArrayItems = arr => {
  const sumResult = arr.reduce((accumulator, item) => accumulator + item);
  return Math.round(sumResult / arr.length);
}
console.log(averageSumOfArrayItems([10, 5, 25, 120]));