// Calculate the sum of numbers in an array of numbers

const sumArrayItems = arr => arr.reduce((accumulator, item) => accumulator + item);
console.log(sumArrayItems([10, 5, 25, 110]));