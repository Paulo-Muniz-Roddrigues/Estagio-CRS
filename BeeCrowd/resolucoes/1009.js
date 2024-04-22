var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = (lines.shift());
let sal = Number(lines.shift());
let ven = Number(lines.shift());

let total = sal + (ven * 0.15);
total = total.toFixed(2);

console.log(`TOTAL = R$ ${total}`);