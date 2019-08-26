const isEqual = require('lodash.isequal')

const either = (value, ...comparisons) => {
  if (!comparisons.length) {
    throw Error('either takes at least a second argument')
  }
  return Array.isArray(comparisons[0])
    ? comparisons[0].some(x => isEqual(x, value))
    : comparisons.some(x => isEqual(x, value))
}

module.exports = either
