// Browsers to run on Sauce Labs
var customLaunchers = {
  // IEs
  SL_IE11_Win10: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 10'
  },
  SL_IE11_Win7: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7'
  },
  SL_IE10_Win7: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: '10.0',
    platform: 'Windows 7'
  },
  // SL_IE9_Win7: {
  //   base: 'SauceLabs',
  //   browserName: 'internet explorer',
  //   version: '9.0',
  //   platform: 'Windows 7'
  // },

  // all other latest browsers
  SL_Chrome_Win10: {
    base: 'SauceLabs',
    browserName: 'chrome',
    version: 'latest',
    platform: 'Windows 10'
  },
  SL_Chrome_Linux: {
    base: 'SauceLabs',
    browserName: 'chrome',
    version: 'latest',
    platform: 'Linux'
  },
  SL_Firefox_Win10: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest',
    platform: 'Windows 10'
  },
  SL_Firefox_Linux: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest',
    platform: 'Linux'
  },
  SL_Edge: {
    base: 'SauceLabs',
    browserName: 'microsoftedge',
    version: 'latest',
    platform: 'Windows 10'
  },
  SL_Safari_OSX: {
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'macOS 10.12',
    version: '11.0'
  }
};

module.exports = function(config) {
  config.set({
    basePath: '',
    files: ['polyfill.js', 'tests/*.test.js'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    browsers: Object.keys(customLaunchers),
    customLaunchers: customLaunchers,
    singleRun: true,
    reporters: ['dots', 'saucelabs'],
    plugins: ['karma-jasmine', 'karma-sauce-launcher'],

    // SauceLabs allows for 2 tunnels only, therefore some browsers will have to wait
    // rather long time. Plus mobile emulators tend to require a lot of time to start up.
    // 10 minutes should be more than enough to run all of them.
    browserNoActivityTimeout: 600000,
    captureTimeout: 600000,
    sauceLabs: {
      startConnect: false,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER,
      recordScreenshots: false,
      recordVideo: false,
      testName: 'CustomEvent Polyfill',
      public: 'public'
    },
    frameworks: ['jasmine']
  });
};
