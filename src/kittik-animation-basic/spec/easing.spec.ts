const { assert } = require('chai')
const EASING = require('../src/easing')

describe('Animation::easing', () => {
  it('Should properly export easing', () => {
    assert.isNumber(EASING.inQuad(0, 0, 0, 0))
    assert.isNumber(EASING.outQuad(0, 0, 0, 0))
    assert.isNumber(EASING.inOutQuad(0, 0, 0, 100))
    assert.isNumber(EASING.inOutQuad(0, 0, 0, 0))
    assert.isNumber(EASING.inCubic(0, 0, 0, 0))
    assert.isNumber(EASING.outCubic(0, 0, 0, 0))
    assert.isNumber(EASING.inOutCubic(0, 0, 0, 100))
    assert.isNumber(EASING.inOutCubic(0, 0, 0, 0))
    assert.isNumber(EASING.inQuart(0, 0, 0, 0))
    assert.isNumber(EASING.outQuart(0, 0, 0, 0))
    assert.isNumber(EASING.inOutQuart(0, 0, 0, 100))
    assert.isNumber(EASING.inOutQuart(0, 0, 0, 0))
    assert.isNumber(EASING.inQuint(0, 0, 0, 0))
    assert.isNumber(EASING.outQuint(0, 0, 0, 0))
    assert.isNumber(EASING.inOutQuint(0, 0, 0, 100))
    assert.isNumber(EASING.inOutQuint(0, 0, 0, 0))
    assert.isNumber(EASING.inSine(0, 0, 0, 0))
    assert.isNumber(EASING.outSine(0, 0, 0, 0))
    assert.isNumber(EASING.inOutSine(0, 0, 0, 0))
    assert.isNumber(EASING.inExpo(0, 0, 0, 0))
    assert.isNumber(EASING.inExpo(5, 0, 0, 0))
    assert.isNumber(EASING.outExpo(0, 0, 0, 0))
    assert.isNumber(EASING.outExpo(5, 0, 0, 0))
    assert.isNumber(EASING.inOutExpo(0, 0, 0, 0))
    assert.isNumber(EASING.inOutExpo(2, 0, 0, 2))
    assert.isNumber(EASING.inOutExpo(1, 0, 0, 100))
    assert.isNumber(EASING.inOutExpo(100, 0, 0, 0))
    assert.isNumber(EASING.inCirc(0, 0, 0, 0))
    assert.isNumber(EASING.outCirc(0, 0, 0, 0))
    assert.isNumber(EASING.inOutCirc(0, 0, 0, 100))
    assert.isNumber(EASING.inOutCirc(0, 0, 0, 0))
    assert.isNumber(EASING.inElastic(0, 0, 0, 0))
    assert.isNumber(EASING.inElastic(5, 0, 0, 5))
    assert.isNumber(EASING.inElastic(5, 0, -2, 2))
    assert.isNumber(EASING.inElastic(5, 0, 2, 2))
    assert.isNumber(EASING.outElastic(0, 0, 0, 0))
    assert.isNumber(EASING.outElastic(5, 0, 0, 5))
    assert.isNumber(EASING.outElastic(5, 0, -2, 2))
    assert.isNumber(EASING.outElastic(5, 0, 2, 2))
    assert.isNumber(EASING.inOutElastic(0, 0, 0, 0))
    assert.isNumber(EASING.inOutElastic(8, 0, 0, 8))
    assert.isNumber(EASING.inOutElastic(8, 0, -2, 2))
    assert.isNumber(EASING.inOutElastic(8, 0, 2, 2))
    assert.isNumber(EASING.inOutElastic(0.5, 0, 2, 2))
    assert.isNumber(EASING.inBack(0, 0, 0, 0))
    assert.isNumber(EASING.outBack(0, 0, 0, 0))
    assert.isNumber(EASING.inOutBack(0, 0, 0, 0))
    assert.isNumber(EASING.inOutBack(1, 0, 0, 5))
    assert.isNumber(EASING.inBounce(0, 0, 0, 0))
    assert.isNumber(EASING.outBounce(1, 0, 0, 5))
    assert.isNumber(EASING.outBounce(0.7, 0, 0, 0))
    assert.isNumber(EASING.outBounce(1463, 1, 110.5, 2000))
    assert.isNumber(EASING.outBounce(0.8, 0, 0, 0.001))
    assert.isNumber(EASING.inOutBounce(0, 0, 0, 0))
    assert.isNumber(EASING.inOutBounce(1, 0, 0, 5))
  })
})
