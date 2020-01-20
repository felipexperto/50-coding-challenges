// Print all the multiplication tables with numbers from 1 to 10

function printTables(from, to) {
  for (let table = from; table <= to; table++ ) {
    for (let line = 1; line <= 10; line++ ) {
      console.log(`${table} x ${line} = ${table*line}`);
    }
  }
}
printTables(1, 10);