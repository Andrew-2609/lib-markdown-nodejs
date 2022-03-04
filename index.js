const chalk = require('chalk');

const paragrafo = `Texto retornado por uma ${chalk.blue("função")}.`;

function retornarTexto(string) {
    return string;
}

console.log(retornarTexto(paragrafo));