const cond = require('./cond')

test('cond', () => {
  expect(cond([])).toBe(undefined)
  expect(cond([], () => 2)).toBe(2)
  expect(cond([], 2)).toBe(2)

  expect(cond([[true, () => 4]])).toBe(4)
  expect(cond([[true, 4]])).toBe(4)
  expect(cond([[() => true, 4]])).toBe(4)
  expect(cond([[() => true, () => 4]])).toBe(4)

  expect(cond([[false, 5], [true, 6], [false, 7]])).toBe(6)
  expect(
    cond([
      [() => false, () => 5],
      [() => true, () => 6],
      [() => false, () => 7],
    ])
  ).toBe(6)
})
