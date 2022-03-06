const {pegarTexto} = require('../index');

const resultados = [
    {
        FileList: `https://developer.mozilla.org/pt-BR/docs/Web/API/FileList`
    }
]

describe('pegarTexto::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegarTexto).toBe('function');
    });

    it('deve resolver a função com sucesso', async () => {
        await expect(pegarTexto('./test/arquivos/texto1.md')).resolves.toEqual(resultados);
    });

    it('deve retornar um array com resultados', async () => {
        const resultado = await pegarTexto('./test/arquivos/texto1.md');
        expect(resultado).toEqual(resultados);
    });

    it('deve retornar mensagem para texto sem links', async () => {
        const resultado = await pegarTexto('./test/arquivos/texto1-sem-links.md');
        expect(resultado).toBe('Não há links.');
    })
});