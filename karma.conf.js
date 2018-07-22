module.exports = function(config) {
  config.set({
    basepath: '',
    files: ['polyfill.js', 'tests/*.test.js'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: false
  });
};
