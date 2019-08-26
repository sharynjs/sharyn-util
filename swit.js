const isEqual = require('lodash.isequal')

const swit = (value, cases, defaultCase) => {
  const foundCase = cases.find(c =>
    Array.isArray(c[0])
      ? c[0].some(x => isEqual(x, value))
      : isEqual(c[0], value)
  )
  const caseToUse = foundCase ? foundCase[1] : defaultCase
  return (
    caseToUse && (caseToUse instanceof Function ? caseToUse(value) : caseToUse)
  )
}

module.exports = swit
