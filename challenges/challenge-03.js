// Print the multiplication table with 7

function printTable(number) {
  for (let i = 1; i <= 10; i++ ) {
    console.log(`${number} x ${i} = ${number*i}`);
  }
}
printTable(7);