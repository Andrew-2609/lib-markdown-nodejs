const chalk = require('chalk')
const pegarTexto = require('./index')

const caminho = process.argv[process.argv.length - 1];

function processaTexto(caminhoDeArquivo) {
    const resultado = pegarTexto(caminhoDeArquivo);
    console.log(chalk.yellow('Lista de links:'), resultado);
}

processaTexto(caminho);