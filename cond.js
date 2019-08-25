const cond = (cases, defaultCase) => {
  const foundCase = cases.find(c => (c[0] instanceof Function ? c[0]() : c[0]))
  const caseToUse = foundCase ? foundCase[1] : defaultCase
  return caseToUse && (caseToUse instanceof Function ? caseToUse() : caseToUse)
}

module.exports = cond
