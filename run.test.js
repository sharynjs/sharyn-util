const run = require('./run')

test('run', () => {
  expect(run(() => 2)).toEqual(2)
})
