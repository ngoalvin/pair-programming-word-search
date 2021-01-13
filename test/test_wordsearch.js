const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  
 it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['V', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALVIN')
    assert.isTrue(result);
  });

  it("should return false if the word is empty", function() {
    const result = wordSearch([
      []
    ], 'ALVIN')
    assert.isFalse(result);
  })

  it("should return false if the word is empty string ", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['V', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], '')
    assert.isFalse(result);
  })

  it("should return true if the word is in reverse", function() {
    const result = wordSearch([
      ['B', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['V', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['N', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['I', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['V', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['L', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['A', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ALVIN')
    assert.isTrue(result);
  })

});

