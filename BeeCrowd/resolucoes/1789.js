var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
  let lesmas = Number(lines.shift())
  if (lesmas == '') {
    break;
  }
  let velocidades = lines.shift()
  velocidades = velocidades.split(' ').map((a) => Number(a));
  
  let maior = 0;
  for (let i = 0; i < velocidades.length; i++) {
    if(velocidades[i] > maior) maior = velocidades[i];
  }
  if(maior < 10) console.log('1');
  else if(maior >= 10 && maior < 20) console.log('2');
  else if(maior >= 20) console.log('3');
}