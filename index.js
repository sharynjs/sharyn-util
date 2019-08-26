module.exports = {
  cycle: require('./cycle'),
  defined: require('./defined'),
  either: require('./either'),
  exists: require('./exists'),
  ifs: require('./ifs'),
  run: require('./run'),
  swit: require('./swit'),
  toggle: require('./toggle'),
  wait: require('./wait'),
  getGlobal: require('./global').getGlobal,
  setGlobal: require('./global').setGlobal,
  getAllGlobal: require('./global').getAllGlobal,
  deleteGlobal: require('./global').deleteGlobal,
  clearGlobal: require('./global').clearGlobal,
}
