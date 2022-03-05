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

function pegarArquivoAssincrona(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises.readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.yellow(texto)))
        .catch((erro) => tratarErro(erro))
    ;
}

async function pegarArquivoAsyncAwait(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.bgGreen(texto))
    } catch (erro) {
        console.log(chalk.bold('Simulando erro:'))
        tratarErro(erro);
    }
}

/*
// Testes com função Síncrona
pegarArquivoSincrona('./arquivos/texto1.md');
console.log('Simulando erro:');
pegarArquivoSincrona('./arquivos/');

// Testes com função assíncrona usando .then().catch()
pegarArquivoAssincrona('./arquivos/texto1.md');
console.log('Simulando erro:');
pegarArquivoAssincrona('./arquivos/');*/

// Testes com função assíncrona usando async/await
// noinspection JSIgnoredPromiseFromCall para o WebStorm
pegarArquivoAsyncAwait('./arquivos/texto1.md');
// noinspection JSIgnoredPromiseFromCall para o WebStorm
pegarArquivoAsyncAwait('./arquivos/');