var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(lines.shift());
let area = 3.14159*Math.pow(raio,2);
area = area.toFixed(4);
console.log(`A=${area}`);