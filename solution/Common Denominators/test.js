const should = require('should');
const convertFrac = require('./index');

describe('test.js', function () {
    it('should return "(6,12)(4,12)(3,12)"', function () {
        convertFrac.convertFrac([ [1, 2], [1, 3], [1, 4] ]).should.equal('(6,12)(4,12)(3,12)');
    })
})