// Print the first 100 prime numbers

const isPrime = (num) => {
  if(num <=1) return false;
  if(num <=3 || num % 2 === 1) console.log(num);
}

for (let i = 0; i <=100; i++) {
  isPrime(i);
}