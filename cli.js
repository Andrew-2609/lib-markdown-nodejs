#!/usr/bin/env node

const chalk = require('chalk')
const {pegarTexto} = require('./index')
const validarUrls = require('./http-validacao')

const caminho = process.argv;

async function processarTexto(caminhoDeArquivo) {
    const resultado = await pegarTexto(caminhoDeArquivo[2]);

    if (caminhoDeArquivo[3] === 'validar') {
        console.log(chalk.blue('Links validados: '));
        return validarUrls(resultado);
    }

    console.log(chalk.yellow('Lista de links:'));
    return resultado;
}

processarTexto(caminho).then(res => console.log(res));