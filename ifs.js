const ifs = (...cases) => {
  if (cases.length === 0) {
    throw Error('ifs takes at least 1 parameter')
  }
  const foundCase = cases.find(c => (c[0] instanceof Function ? c[0]() : c[0]))
  const result = foundCase && foundCase[1]
  return result && (result instanceof Function ? result() : result)
}

module.exports = ifs
