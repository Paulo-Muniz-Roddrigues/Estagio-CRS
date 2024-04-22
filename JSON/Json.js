let pessoa = {
  nome: 'paulo',
  idade: 24,
  estuda: true,
  endereco:{
    rua: 'nome da rua',
    cidade:'nome da cidade',
    numero: 123
  },
  idioma:{
    portugues: true,
    ingles: true,
    italiano: false
  },
  programando: () => {
    console.log('Programando');
  }
}

let texto = JSON.stringify(pessoa);
console.log(texto);
texto = JSON.parse(texto);
console.log(texto);

let chave = Object.keys(pessoa);
chave.forEach((dado) => console.log(pessoa[dado]));

let pessoas = [
  {
    nome: 'João',
    idade: 21
  },
  {
    nome: 'Lucas',
    idade: 32
  },
]
pessoas.forEach((pessoas) => console.log(`Meu nome é ${pessoas.nome} e tenho ${pessoas.idade} anos!`))

pessoa.programando();

const arquivo = require('./arquivo.json');

console.log(arquivo);