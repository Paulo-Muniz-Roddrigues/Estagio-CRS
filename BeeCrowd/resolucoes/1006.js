var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

a *= 0.2;
b *= 0.3;
c *= 0.5;

let media = a + b + c;
media = media.toFixed(1);

console.log(`MEDIA = ${media}`);