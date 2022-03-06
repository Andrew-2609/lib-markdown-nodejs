function gerarArrayDeUrls(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validarUrls(arrayLinks) {
    return gerarArrayDeUrls(arrayLinks);
}

module.exports = validarUrls;