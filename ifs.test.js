const ifs = require('./ifs')

test('ifs', () => {
  expect(ifs([])).toBe(undefined)
  expect(ifs([], () => 2)).toBe(2)
  expect(ifs([], 2)).toBe(2)

  expect(ifs([[true, () => 4]])).toBe(4)
  expect(ifs([[true, 4]])).toBe(4)
  expect(ifs([[() => true, 4]])).toBe(4)
  expect(ifs([[() => true, () => 4]])).toBe(4)

  expect(ifs([[false, 5], [true, 6], [false, 7]])).toBe(6)
  expect(
    ifs([
      [() => false, () => 5],
      [() => true, () => 6],
      [() => false, () => 7],
    ])
  ).toBe(6)
})
