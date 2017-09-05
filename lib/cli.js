#!/usr/bin/env node

'use strict';

var com = require('commander'),
    col = require('colors/safe').green,
    ind = require('./index'),
    _exit = process.exit;

// Re-assign process.exit because of commander
process.exit = exit;

// AOP around for commander to option missing argument
around(com, 'optionMissingArgument', function (fn, args) {
    com.outputHelp();
    fn.apply(this, args);
    return {
        args: [],
        unknown: []
    }
});

// AOP before for commander to output help
before(com, 'outputHelp', function () {
    // track if help was shown for unknown option
    this._helpShown = true;
});

// AOP before for commander to unknown option
before(com, 'unknownOption', function () {
    // allow unknown options if help was shown, to prevent trailing error
    this._allowUnknownOption = this._helpShown;

    // show help if not yet shown
    if (!this._helpShown) {
        com.outputHelp();
    }
});

// basic usage of command
com.version(require('./../package.json').version, '    --version')
    .usage('[options]')
    .option('    --all', 'lists all installed versions')
    .option('-s  --silent', 'will not exit even versions didn\'t match')
    .option('-n  --node [version]', 'check node version')
    .option('-m  --npm [version]', 'check npm version')
    .option('-y  --yarn [version]', 'check yarn version')
    .option('-g  --git [version]', 'check git version')
    .option('-k  --karma [version]', 'check karma version')
    .option('    --gulp [version]', 'check gulp version')
    .option('    --grunt [version]', 'check grunt version')
    .option('-e  --eslint [version]', 'check eslint version')
    .option('-t  --tslint [version]', 'check tslint version')
    .option('    --nvm [version]', 'check nvm version')
    .option('    --n-mac [version]', 'check n version');

// must be before .parse() since
// node's emit() is immediate
com.on('--help', function () {
    console.log();
    console.log(col('  Examples:'));
    console.log();
    console.log(col('    $ ' + com.name() + ' --node ">=4.2.1"'));
    console.log(col('    $ ' + com.name() + ' --help'));
    console.log();
});

// get commander and parse all args
com.parse(process.argv);

// start only if the process is not exited yet
if (!exit.exited) {

    try {

        if (com.all) {
            // prints all the versions
            ind.checkAll();
        } else {
            // validate all input data
            if (!ind.validate({
                    node: com.node,
                    npm: com.npm,
                    yarn: com.yarn,
                    git: com.git,
                    karma: com.karma,
                    gulp: com.gulp,
                    grunt: com.grunt,
                    eslint: com.eslint,
                    tslint: com.tslint,
                    nvm: com.nvm,
                    n: com.nMac
                })) {
                _exit(1);
            }
        }
    } catch (e) {
        throw e;
    }
    exit.exited = false;
    _exit(0);
}

// utility functions
function around(obj, method, fn) {

    var old = obj[method];

    obj[method] = function () {

        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }

        return fn.call(this, old, args);
    }
}

function before(obj, method, fn) {

    var old = obj[method];

    obj[method] = function () {
        fn.call(this);
        old.apply(this, arguments);
    }
}

/**
 * Graceful exit for async STDIO
 */
function exit(code) {

    function done() {
        if (!(draining--)) {
            _exit(code);
        }
    }

    var draining = 0,
        streams = [process.stdout, process.stderr];

    exit.exited = true;

    streams.forEach(function (stream) {
        // submit empty write request and wait for completion
        draining += 1;
        stream.write('', done);
    })

    done();
}
