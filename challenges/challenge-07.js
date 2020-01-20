// Calculate the sum of even numbers greater than 10 and less than 30

function sumEvenNumbersBetweenInterval(from, to) {
  let result = null;
  for (let i = from; i <= to; i++ ) {
    if(i % 2 !== 1) result += i;
  }
  console.log(result);
}
sumEvenNumbersBetweenInterval(11, 29);