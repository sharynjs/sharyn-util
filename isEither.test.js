const isEither = require('./isEither')

test('isEither', () => {
  expect(isEither(2, [1, 2])).toBe(true)
  expect(isEither(3, [1, 2])).toBe(false)
  expect(isEither(2, 1, 2)).toBe(true)
  expect(isEither(3, 1, 2)).toBe(false)
  expect(() => isEither(1)).toThrow()
})
