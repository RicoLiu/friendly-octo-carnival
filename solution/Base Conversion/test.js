const convert = require('./index');
const should = require('should');

const Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

describe('test.js', function () {
  it('should return "1111"', function () {
    convert.convert('15', Alphabet.DECIMAL, Alphabet.BINARY).should.equal('1111');
  });

  it('should return "17"', function () {
        convert.convert("15", Alphabet.DECIMAL, Alphabet.OCTAL).should.equal('17');
    });
});