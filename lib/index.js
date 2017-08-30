var childProcess = require('child_process'),
    colors = require('colors/safe'),
    semver = require('semver'),
    options = [
        'node', 'npm', 'yarn',
        'git', 'karma', 'gulp',
        'grunt', 'eslint', 'tslint',
        'nvm', 'n'
    ],
    conf = {},
    isValid = true;

module.exports.validate = function (config) {

    var subArray = options.filter(function (key) {
        return (config[key] && (true !== config[key]));
    });

    subArray.forEach(function (key) {

        conf[key] = {
            expected: config[key],
            actual: '',
            isValid: false
        };

        validateEach(key);

        if (conf[key].isValid) {
            console.log(colors.green('    ' + key + ': ' + conf[key].actual));
        } else {
            isValid = false;
            console.log(colors.red('    ' + key + ': ' + conf[key].actual + ' but expected is ' + conf[key].expected));
        }
    });

    return isValid;
};

module.exports.checkAll = function () {

    var config = {};

    options.forEach(function (key) {

        try {

            config[key] = findOutVersion(key);

            if (config[key]) {
                console.log(colors.green('    ' + key + ': ' + config[key]));
            }
        } catch (e) {
            // do nothing
            delete config[key];
        }
    });

    return config;
};

function validateEach(key) {
    try {
        conf[key].actual = findOutVersion(key);
        conf[key].isValid = semver.satisfies(conf[key].actual, conf[key].expected);
    } catch (e) {
        conf[key].actual = '';
        conf[key].isValid = false;
    }
}

function findOutVersion(key) {
    return String(childProcess.execSync(key + ' --version', {
        cwd: './node_modules/.bin/'
    })).replace(/[^0-9.]/gm, '');
}
