const fs = require('fs');
const path = require('path');
const {tratarErro, extrairLinksDoTexto} = require('../index');

async function pegarArquivo(caminhoDoArquivo) {
    const caminhoAbsoluto = path.join(__dirname, '..', caminhoDoArquivo);
    const encoding = 'utf-8';
    try {
        const arquivos = await fs.promises.readdir(caminhoAbsoluto, {encoding});

        return await Promise.all(arquivos.map(async (arquivo) => {
            const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
            const texto = await fs.promises.readFile(localArquivo, encoding);
            return extrairLinksDoTexto(texto);
        }));
    } catch (erro) {
        tratarErro(erro);
    }
}

pegarArquivo('./arquivos').then(res => console.log(res));