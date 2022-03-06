const chalk = require('chalk');
const fs = require('fs');

function tratarErro(erro) {
    throw new Error(chalk.red(
        erro.code,
        `Erro ao ler arquivo! Você passou o caminho do ${chalk.bold('arquivo')} corretamente?`
    ));
}

function extrairLinksDoTexto(texto) {
    const regex = /\[([^\]]*)]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const resultados = []
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        resultados.push({[temp[1]]: temp[2]})
    }

    return resultados.length === 0 ? 'Não há links.' : resultados;
}

async function pegarTexto(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extrairLinksDoTexto(texto);
    } catch (erro) {
        tratarErro(erro);
    }
}

module.exports = pegarTexto