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

    it('deve retornar um array com resultados', async () => {
        const resultado = await pegarTexto('./test/arquivos/texto1.md');
        expect(resultado).toEqual(resultados);
    });
});