'use strict';

function VersionManager() {
  this.options = ['node', 'npm', 'yarn', 'git', 'eslint'];
}

VersionManager.prototype.validate = function (config) {
  var subArray = this.options.filter(function (key) {
    return config && config[key] && true !== config[key];
  });

  if (subArray && subArray.length > 0) {
    var isValid = true,
      conf = {};

    subArray.forEach(function (key) {
      conf[key] = {
        expected: config[key]
      };

      try {
        conf[key].actual = findOutVersion(key);
        conf[key].isValid = require('semver').satisfies(
          conf[key].actual,
          conf[key].expected
        );
      } catch (e) {
        conf[key].actual = '';
        conf[key].isValid = false;
      }

      if (conf[key].isValid) {
        console.log('\x1b[32m    %s: %s \x1b[39m', key, conf[key].actual);
      } else {
        isValid = false;
        console.log(
          '\x1b[32m    %s: %s but expected is %s \x1b[39m',
          key,
          conf[key].actual,
          conf[key].expected
        );
      }
    });

    return isValid;
  }

  return false;
};

VersionManager.prototype.checkAll = function () {
  var config = {};

  this.options.forEach(function (key) {
    try {
      config[key] = findOutVersion(key);

      /* istanbul ignore else */
      if (config[key]) {
        console.log('\x1b[32m    %s: %s \x1b[39m', key, config[key]);
      }
    } catch (e) {
      // do nothing
      delete config[key];
    }
  });

  return config;
};

exports = module.exports = new VersionManager();

// ---------- Utility Functions ----------
function findOutVersion(key) {
  return String(
    require('child_process').execSync(key + ' --version', {
      cwd: './node_modules/.bin/'
    })
  ).replace(/[^0-9.]/gm, '');
}
