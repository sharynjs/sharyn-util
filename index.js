module.exports = {
  getGlobal: require('./global').getGlobal,
  setGlobal: require('./global').setGlobal,
  getAllGlobal: require('./global').getAllGlobal,
  deleteGlobal: require('./global').deleteGlobal,
  clearGlobal: require('./global').clearGlobal,
  exists: require('./exists'),
  isEither: require('./isEither'),
  run: require('./run'),
  swit: require('./swit'),
  toggle: require('./toggle'),
  wait: require('./wait'),
}
