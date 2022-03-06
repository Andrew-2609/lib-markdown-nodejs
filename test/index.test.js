const {pegarTexto} = require('../index');

describe('pegarTexto::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegarTexto).toBe('function');
    })
});