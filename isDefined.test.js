const isDefined = require('./isDefined')

test('isDefined', () => {
  expect(isDefined(undefined)).toBe(false)
  expect(isDefined(void 0)).toBe(false)
  expect(isDefined(null)).toBe(true)
  expect(isDefined(0)).toBe(true)
  expect(isDefined('')).toBe(true)
  expect(isDefined(NaN)).toBe(true)
})
