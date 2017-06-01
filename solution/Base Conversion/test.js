const convert = require('./index');
const should = require('should');

const Alphabet = {
    BINARY: '01',
    OCTAL: '01234567',
    DECIMAL: '0123456789',
    HEXA_DECIMAL: '0123456789abcdef',
    ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
    ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

describe('test.js', function () {
    it('should return "1111"', function () {
        convert.convert('15', Alphabet.DECIMAL, Alphabet.BINARY).should.equal('1111');
    });

    it('should return "17"', function () {
        convert.convert("15", Alphabet.DECIMAL, Alphabet.OCTAL).should.equal('17');
    });

    it('should return "10"', function () {
        convert.convert("1010", Alphabet.BINARY, Alphabet.DECIMAL).should.equal('10');
    });

    it('should return "a"', function () {
        convert.convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL).should.equal('a');
    });

    it('should return "a"', function () {
        convert.convert("0", Alphabet.DECIMAL, Alphabet.ALPHA).should.equal('a');
    });

    it('should return "bb"', function () {
        convert.convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER).should.equal('bb');
    });

    it('should return "320048"', function () {
        convert.convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL).should.equal('320048');
    });

    it('should return "SAME"', function () {
        convert.convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER).should.equal('SAME');
    })
});