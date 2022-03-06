const fetch = require('node-fetch')

async function checarStatus(arrayUrls) {
    return await Promise.all(
        arrayUrls.map(async (url) => {
            const res = await fetch(url);
            return res.status;
        })
    );
}

function gerarArrayDeUrls(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validarUrls(arrayLinks) {
    const arrayDeUrls = gerarArrayDeUrls(arrayLinks);
    return await checarStatus(arrayDeUrls);
}

module.exports = validarUrls;