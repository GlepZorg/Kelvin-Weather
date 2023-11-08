// The value of kelvin will not change.
const kelvin = 0;
// Celsius is less than kelvin
const celsius = kelvin - 273;
// Setting fahrenheit temperature
let fahrenheit = celsius * (9/5) + 32;
// Ensuring that we have a integer
fahrenheit = Math.floor(fahrenheit);
let newton = celsius * (33/100);
newton = Math.floor(newton);


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton`);