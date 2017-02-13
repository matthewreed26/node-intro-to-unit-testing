const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should give output based on mod', function() {
    const normalCases = [
      {a: 30, expected: 'fizz-buzz'},
      {a: 25, expected: 'buzz'},
      {a: 9, expected: 'fizz'},
      {a: 11, expected: 11}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if arg is not a number', function() {
    const badInputs = [
      'a',
      '1',
      function(){return 2}
    ];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});