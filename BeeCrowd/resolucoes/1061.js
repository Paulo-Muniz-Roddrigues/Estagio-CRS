var input = require('fs').readFileSync('./index.txt', 'utf8');
var lines = input.split('\n');

let linhas = [lines.shift(), lines.shift(), lines.shift(), lines.shift()];

let diaInicio = linhas[0].split(' ').map((a) => Number(a));
let tempoInicio = linhas[1].split(' : ').map((a) => Number(a));

let diaFim = linhas[2].split(' ').map((a) => Number(a));
let tempoFim = linhas[3].split(' : ').map((a) => Number(a));

let segundos = (diaFim[1]*86400)-(diaInicio[1]*86400) + (tempoFim[0]*3600)-(tempoInicio[0]*3600) + (tempoFim[1]*60)-(tempoInicio[1]*60) + (tempoFim[2]-tempoInicio[2]);

console.log(`${Math.floor(segundos / 86400)} dia(s)`);
segundos %= 86400;

console.log(`${Math.floor(segundos / 3600)} hora(s)`);
segundos %= 3600;

console.log(`${Math.floor(segundos / 60)} minuto(s)`);
segundos %= 60;

console.log(`${segundos} segundo(s)`);