const isEither = (val, ...comparisons) => {
  if (!comparisons.length) {
    throw Error('isEither takes at least a second argument')
  }
  if (Array.isArray(comparisons[0])) {
    return comparisons[0].includes(val)
  }
  return comparisons.includes(val)
}

module.exports = isEither
