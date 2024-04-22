var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n1 = Number(lines.shift());
let n2 = Number(lines.shift());

n1 = n1 * 0.35;
n2 = n2 * 0.75;

let media = n1 + n2;
media = media * (10/11);
media = media.toFixed(5)

console.log(`MEDIA = ${media}`);