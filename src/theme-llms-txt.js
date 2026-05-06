const path = require('path');

module.exports = function themeLlmsTxt() {
  return {
    name: 'theme-llms-txt-local-shim',
    getThemePath() {
      return path.resolve(
        __dirname,
        '..',
        'node_modules',
        '@signalwire',
        'docusaurus-theme-llms-txt',
        'lib',
        'theme',
      );
    },
  };
};
