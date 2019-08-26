const either = require('./either')

test('either', () => {
  expect(either(2, [1, 2])).toBe(true)
  expect(either(3, [1, 2])).toBe(false)
  expect(either(2, 1, 2)).toBe(true)
  expect(either(3, 1, 2)).toBe(false)
  expect(() => either(1)).toThrow()
})
