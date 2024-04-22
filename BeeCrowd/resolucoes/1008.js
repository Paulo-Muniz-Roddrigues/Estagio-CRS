var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let funNum = Number(lines.shift());
let numHor = Number(lines.shift());
let valHor = Number(lines.shift());

let sal = valHor * numHor;
sal = sal.toFixed(2);

console.log(`NUMBER = ${funNum}`);
console.log(`SALARY = U$ ${sal}`);