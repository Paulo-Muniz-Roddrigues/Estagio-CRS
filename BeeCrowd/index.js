var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let limit = Number(lines.shift());

console.log(limit);

for(let i = 0; i < limit; i++) {
  let valores = lines.shift().split(' ').map((a) => Number(a));
  let k = 0;
  console.log(valores);
  while(valores[0] < valores[1]) {
    valores[0] += valores[0] * (valores[2]/100);
    valores[1] += valores[1] * (valores[3]/100);
    k++
    if(k>100) break;
  }
  console.log(`${k} anos.`)
}

//1160
//1164
//2165