module.exports = function(config) {
  // Browsers to run on Sauce Labs
  var customLaunchers = {
    // IEs
    IE11_Win10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11.0',
      platform: 'Windows 10'
    },
    IE11_Win7: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11.0',
      platform: 'Windows 7'
    },
    IE10_Win7: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '10.0',
      platform: 'Windows 7'
    },
    // IE9_Win7: {
    //   base: 'SauceLabs',
    //   browserName: 'internet explorer',
    //   version: '9.0',
    //   platform: 'Windows 7'
    // },

    // all other latest browsers
    Chrome_Win10: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 'latest',
      platform: 'Windows 10'
    },
    Chrome_Linux: {
      base: 'SauceLabs',
      browserName: 'chrome',
      version: 'latest',
      platform: 'Linux'
    },
    Firefox_Win10: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest',
      platform: 'Windows 10'
    },
    Firefox_Linux: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: 'latest',
      platform: 'Linux'
    },
    Edge: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
      version: '17.17134',
      platform: 'Windows 10'
    },
    Safari_OSX: {
      base: 'SauceLabs',
      browserName: 'safari',
      platform: 'macOS 10.13',
      version: '11.1'
    }
  };

  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: ['polyfill.js', 'tests/*.test.js'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],

    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'CustomEvent Polyfill'
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
