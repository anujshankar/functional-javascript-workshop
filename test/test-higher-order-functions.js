var chai = require('chai');
var expect = chai.expect;
var repeat = require('../higher-order-functions-example.js');

describe('Repeat function performs an operation function for the required number of times when a function and number is passed', function () {
  var testFunction = (function () {
    var count = 0;
    return function () {
      count++;
      return count;
    };
  })();

  it('should return the ', function () {
    expect(repeat(testFunction, 5)).to.eqls();
  });

});

describe('Repeat function performs an operation function for the required number of times when a function and number is passed', function () {
  var testFunction = (function () {
    var count = 0;
    return function () {
      count++;
      return count;
    };
  })();

  it('should return the ', function () {
    expect(repeat(testFunction, 5)).to.eqls();
  });

});


