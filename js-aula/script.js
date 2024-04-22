/*
Fazer um ternário(?) que compare se o passageiro é estudante, retornando o dado a uma variável e, 
em seguida, caindo em um switch case para mostrar o valor que será pago.
Exemplo: se 'carteirinha' for igual a 'estudante', verdadeiro.
*/
/*
//Em javascript o vetor pode ter diversos tipos de dados
let carteirinha = [['Paulo', 'estudante'],['João', 'ladrão'],['Maria', 'estudante']];

for(let i = 0; i < 3; i++) {
  
  let resultado = carteirinha[i][1] == 'estudante' ? true : false  
  
  switch(resultado) {
    case true:
      console.log(`${carteirinha[i][0]} é estudante!\nPaga metade do valor :)\n`);
      break;
    case false:
      console.log(`${carteirinha[i][0]} não é estudante\nPaga o valor inteiro :(\n`.t);
      break;
  }
//shift + acento agudo = crase / ` var Arr=[[1,2],[3,4],[5,6]];
}
*/
/*
let vetor = ['oi', 3, 1.5, 'tchau', 4];
console.log(vetor);

vetor.push('ultima');

console.log(vetor);

vetor.pop();

console.log(vetor);

vetor.shift();


let texto = 'oi tudo bem como voce esta';

let vetorTexto = texto.split(' ');
console.log(vetorTexto);

vetorTexto[2] = vetorTexto[2].toUpperCase();

console.log(vetorTexto);

console.log(vetorTexto.join(' '));

///////////////////////////////////////////////////////////
let soma = [];

for(let i = 0; i < 2; i++){

  soma[i] = parseInt(prompt(`Digite o ${i}º valor: `));
}

soma.push(soma[0] + soma[1]);
console.log(soma);

soma.splice(1, 0, '+');
soma.splice(3, 0, '=');

console.log(soma.join(' '));
*/
////////////////////////////////////////////////////////
/*
function soma(a, b){
  let resultado = Number(a) + Number(b);
  return(resultado)
}

console.log(soma(1, 2));

const soma = (ant, atual) => ant + atual; //mais de uma linha poem {return ...}
*/

let num = [];

for (let i = 0; true; i++) {
  num[i] = parseInt(prompt(`Digite o ${i + 1}º valor: `));
  if (isNaN(num[i])) { //parseInt retorna NaN se não for um número
    num.pop();
    break;
  }
}

const maisUm = (intV) => intV + 1;
let numMaisUm = num.map(maisUm);
console.log(numMaisUm);