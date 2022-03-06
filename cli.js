const chalk = require('chalk')
const {pegarTexto} = require('./index')

const caminho = process.argv[process.argv.length - 1];

async function processarTexto(caminhoDeArquivo) {
    const resultado = await pegarTexto(caminhoDeArquivo);
    return chalk.yellow('Lista de links: ') + resultado;
}

processarTexto(caminho).then(res => console.log(res));