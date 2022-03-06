const chalk = require('chalk')
const pegarTexto = require('./index')

const caminho = process.argv[process.argv.length - 1];

async function processarTexto(caminhoDeArquivo) {
    const resultado = await pegarTexto(caminhoDeArquivo);
    console.log(chalk.yellow('Lista de links:'), resultado);
}

processaTexto(caminho);