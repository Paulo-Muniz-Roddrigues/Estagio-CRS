/*
1º andar
10- 0   |0
20- 40  |*2
30- 120 |*4

2º andar
10- 20  |*2
20- 0   |0
30- 60  |*2

3º andar
10- 40  |*4
20- 40  |*2
30- 0   |0

1º- pegar numero de funcionarios
2º- achar o andar
3º- exibir os minutos

*/

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a1 = Number(lines.shift());
let a2 = Number(lines.shift());
let a3 = Number(lines.shift());

let min = [((a1*0)+(a2*2)+(a3*4)), ((a1*2)+(a2*0)+(a3*2)), ((a1*4)+(a2*2)+(a3*0))]

if((min[0] <= min[1]) && (min[0] <= min[2])) {
  console.log(min[0]);
}

else if(min[1] <= min[0] && min[1] <= min[2]) {
  console.log(min[1]);
}

else if(min[2] <= min[0] && min[2] <= min[1]) {
  console.log(min[2]);
}