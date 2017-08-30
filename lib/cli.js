#!/usr/bin/env node

'use strict';

var commander = require('commander'),
    colors = require('colors/safe'),
    versions = require('./index'),
    _exit = process.exit;

// Re-assign process.exit because of commander
process.exit = exit;

// AOP around for commander to option missing argument
around(commander, 'optionMissingArgument', function (fn, args) {
    commander.outputHelp();
    fn.apply(this, args);
    return {
        args: [],
        unknown: []
    }
});

// AOP before for commander to output help
before(commander, 'outputHelp', function () {
    // track if help was shown for unknown option
    this._helpShown = true;
});

// AOP before for commander to unknown option
before(commander, 'unknownOption', function () {
    // allow unknown options if help was shown, to prevent trailing error
    this._allowUnknownOption = this._helpShown;

    // show help if not yet shown
    if (!this._helpShown) {
        commander.outputHelp();
    }
});

// basic usage of command
commander.version(require('./../package.json').version, '    --version')
    .usage('[options]')
    .option('    --all', 'lists all installed versions')
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
commander.on('--help', function () {
    console.log();
    console.log(colors.green('  Examples:'));
    console.log();
    console.log(colors.green('    $ ' + commander.name() + ' --node ">=4.2.1"'));
    console.log(colors.green('    $ ' + commander.name() + ' --help'));
    console.log();
});

// get commander and parse all args
commander.parse(process.argv);

// start only if the process is not exited yet
if (!exit.exited) {

    try {

        if (commander.all) {
            // prints all the versions
            versions.checkAll();
        } else {
            // validate all input data
            versions.validate({
                node: commander.node,
                npm: commander.npm,
                yarn: commander.yarn,
                git: commander.git,
                karma: commander.karma,
                gulp: commander.gulp,
                grunt: commander.grunt,
                eslint: commander.eslint,
                tslint: commander.tslint,
                nvm: commander.nvm,
                n: commander.nMac
            });
        }
    } catch (e) {
        // console.error('[ERROR] -- something went wrong -- ', e);
        // show help
        commander.outputHelp();
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
