var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

while(true) {
  let x = Number(lines.shift());
  if(x == 0) break;
  let y = []
  for(let i = 1; i <= x; i++){
    y.push(i);
  }
  console.log(y.join(' '));
}