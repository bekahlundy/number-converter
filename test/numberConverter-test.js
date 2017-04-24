const assert = require('chai').assert;
const { numberConverter } = require('../lib/numberConverter.js');

describe('numberConverter', () => {

  it('returns one hundred', () => {
    assert.deepEqual(numberConverter(100), 'one hundred ')
  })
  it('returns twenty-three billion, four hundred fifty-six million, ninety-eight thousand, three hundred twenty-five', () => {
    assert.deepEqual(numberConverter(23456098325), 'twenty-three billion, four hundred fifty-six million, ninety-eight thousand, three hundred twenty-five')
  })
  it('returns two thousand, five hundred twenty-three and 04/100', () => {
    assert.deepEqual(numberConverter(2523.04), 'two thousand, five hundred twenty-three and 04/100')
  })

});
