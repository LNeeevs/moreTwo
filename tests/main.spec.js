const expect = require('chai').expect;

describe('Main', () => {

  var arr1, texto, valor;

  beforeEach(() => {
    arr1 = [1, 2, 3, 4, 5];
    texto = `Hello World! It is my first time here! Nice to meet you're.`;
    valor = `Hello`;
  });

  it('Should to be an array, if true, result true', () => {
    expect(arr1).to.be.a('array');
  });

  it('Should be a string. If not, result false.', () => {
    expect(texto).to.be.a('string');
  });

  it('Should be a float. Or, return false.', () => {
    expect(valor).to.be.a('number');
  })

})