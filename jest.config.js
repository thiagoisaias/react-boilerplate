module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testRegex: 'tests/.*\\.test\\.js$',
  verbose: true,
};
