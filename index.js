const chalk = require('chalk');
const fs = require('fs');

function tratarErro(erro) {
    throw new Error(chalk.red(
        erro.code,
        `Erro ao ler arquivo! Você passou o caminho do ${chalk.bold('arquivo')} corretamente?`
    ));
}

function pegarArquivoSincrona(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            tratarErro(erro);
        }

        console.log(chalk.green(texto));
    });
}

/*
pegarArquivoSincrona('./arquivos/texto1.md');
console.log('Simulando erro:');
pegarArquivoSincrona('./arquivos/');*/
