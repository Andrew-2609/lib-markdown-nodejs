const {pegarTexto} = require('../index');

test('Deve ser uma função', () => {
    expect(typeof pegarTexto).toBe('function');
});