const swit = (val, cases, defaultCase) => {
  const foundCase = cases.find(c => {
    if (Array.isArray(c[0])) {
      return c[0].includes(val)
    }
    return c[0] === val
  })

  const caseToUse = foundCase ? foundCase[1] : defaultCase

  return caseToUse && (caseToUse instanceof Function ? caseToUse(val) : caseToUse)
}

module.exports = swit
