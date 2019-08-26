const either = (value, ...comparisons) => {
  if (!comparisons.length) {
    throw Error('either takes at least a second argument')
  }
  if (Array.isArray(comparisons[0])) {
    return comparisons[0].includes(value)
  }
  return comparisons.includes(value)
}

module.exports = either
