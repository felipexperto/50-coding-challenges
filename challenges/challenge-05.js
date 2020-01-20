// Calculate the sum of numbers from 1 to 10

function sumInterval(from, to) {
  let result = null;
  for (let i = from; i <= to; i++ ) {
    result += i;
  }
  console.log(result);
}
sumInterval(1, 10);