var chai = require('chai');
var expect = chai.expect;
var repeat = require('../higher-order-functions-example.js');

describe('Main function', function () {
    var functionTest = (function () {
        var count = 0;
        return function () {
            count++;
            return count;
        };
    })();

    it('Check funcitonality', function () {
        expect(repeat(functionTest, 5)).to.eqls(5);
    });
});

