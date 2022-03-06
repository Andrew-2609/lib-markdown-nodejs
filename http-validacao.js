const fetch = require('node-fetch')
const {tratarErro} = require('./index')

async function checarStatus(arrayUrls) {
    try {
        return await Promise.all(
            arrayUrls.map(async (url) => {
                const res = await fetch(url);
                return `${res.status} - ${res.statusText}`;
            })
        );
    } catch (erro) {
        tratarErro(erro);
    }
}

function gerarArrayDeUrls(arrayLinks) {
    try {
        return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
    } catch (erro) {
        tratarErro(erro);
    }
}

async function validarUrls(arrayLinks) {
    try {
        const arrayDeUrls = gerarArrayDeUrls(arrayLinks);
        const statusUrls = await checarStatus(arrayDeUrls);
        return arrayLinks.map((objeto, indice) => (
            {
                ...objeto,
                status: statusUrls[indice]
            }
        ));
    } catch (erro) {
        tratarErro(erro);
    }
}

module.exports = validarUrls;