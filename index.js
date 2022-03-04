const chalk = require('chalk');

const paragrafo = "Olá, mundo!";

function retornarTextoEmAzul(string) {
    return chalk.blue(string);
}

function retornarTextoEmAmarelo(string) {
    return chalk.yellow(string);
}

function retornarTextoEmNegrito(string) {
    return chalk.bold(string);
}

function retornarTextoEmItalico(string) {
    return chalk.italic(string);
}

console.log(retornarTextoEmAzul(paragrafo));
console.log(retornarTextoEmAmarelo(paragrafo));
console.log(retornarTextoEmAzul(retornarTextoEmNegrito(paragrafo)));
console.log(retornarTextoEmAmarelo(retornarTextoEmItalico(paragrafo)));