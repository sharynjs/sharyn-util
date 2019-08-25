const swit = (val, cases, defaultCase) => {
  const foundCase = cases.find(c =>
    Array.isArray(c[0]) ? c[0].includes(val) : c[0] === val
  )
  const caseToUse = foundCase ? foundCase[1] : defaultCase
  return caseToUse && (caseToUse instanceof Function ? caseToUse(val) : caseToUse)
}

module.exports = swit
