const assert = require('chai').assert;
const { numberConverter } = require('../lib/numberConverter(without-comments).js');

describe('numberConverter', () => {

  it('returns one hundred', () => {
    assert.deepEqual(numberConverter(100), 'one hundred')
  })

  it('returns twenty-three billion, four hundred fifty-six million, ninety-eight thousand, three hundred twenty-five', () => {
    assert.deepEqual(numberConverter(23456098325), 'twenty-three billion, four hundred fifty-six million, ninety-eight thousand, three hundred twenty-five')
  })

  it('returns two thousand, five hundred twenty-three and 04/100', () => {
    assert.deepEqual(numberConverter(2523.04), 'two thousand, five hundred twenty-three and 04/100')
  })

  it('returns three and 14/100', () => {
    assert.deepEqual(numberConverter(Math.PI), 'three and 14/100')
  })

  it('returns eleven', () => {
    assert.deepEqual(numberConverter(11), 'eleven')
  })

  it('returns zero and 80/100', () => {
    assert.deepEqual(numberConverter(0.8), 'zero and 80/100')
  })

  it('returns zero', () => {
    assert.deepEqual(numberConverter(0), 'zero')
  })

  it('returns one billion', () => {
    assert.deepEqual(numberConverter(1000000000), 'one billion')
  })
});
