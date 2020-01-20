// Create a function that will convert from Celsius to Fahrenheit

function convertTemperature(from, to, degree) {

  if (from !== 'Celsius' && from !== 'Fahrenheit') throw new Error('Wrong degree scale.');
  if (to !== 'Celsius' && to !== 'Fahrenheit') throw new Error('Wrong degree scale.');
  if (!degree) throw new Error('The degree parameter is missing');  

  if (from === 'Celsius') console.log( Math.round((degree * 1.8) + 32) );
  else console.log( Math.round((degree - 32) / 1.8) );
}
convertTemperature('Celsius', 'Fahrenheit', 30);