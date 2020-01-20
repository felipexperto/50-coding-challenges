// Find the maximum number in an array of numbers

const returnMaxValue = arr => arr.reduce((accumulator, item) => Math.max(accumulator,item) );
console.log(returnMaxValue([10, 5, 25, 120, -150]));