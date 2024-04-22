var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let tipo = [lines.shift(), lines.shift(),lines.shift()];

switch (tipo[0]){
  case 'vertebrado':
    switch (tipo[1]){
      case 'ave':
        switch (tipo[2]){
          case 'carnivoro':
            console.log('aguia');
            return;
          case 'onivoro':
            console.log('pomba');
            return;
        }
      case 'mamifero':
        switch (tipo[2]){
          case 'onivoro':
            console.log('homem');
            return;
          case 'herbivoro':
            console.log('vaca');
            return;
        }
    }
  case 'invertebrado':
    switch (tipo[1]){
      case 'inseto':
        switch (tipo[2]){
          case 'hematofago':
            console.log('pulga');
            return;
          case 'herbivoro':
            console.log('lagarta');
            return;
        }
      case 'anelideo':
        switch (tipo[2]){
          case 'hematofago':
            console.log('sanguessuga');
            return;
          case 'onivoro':
            console.log('minhoca');
            return;
        }
    }
}