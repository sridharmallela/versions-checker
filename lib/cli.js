#!/usr/bin/env node

'use strict';

var { commander, exit, exited, promptMessage } = require('programmer');
var ind = require('./index');
var prompt = promptMessage();
var log = console.log;

// basic usage of command
commander
    .version(require('./../package.json').version, '    --version')
    .usage('[options]')
    .option('    --all', 'lists all installed versions')
    .option('-s, --silent', "will not exit even versions didn't match")
    .option('-n, --node [version]', 'check node version')
    .option('-m, --npm [version]', 'check npm version')
    .option('-y, --yarn [version]', 'check yarn version')
    .option('-g, --git [version]', 'check git version')
    .option('-k, --karma [version]', 'check karma version')
    .option('    --gulp [version]', 'check gulp version')
    .option('    --grunt [version]', 'check grunt version')
    .option('-e, --eslint [version]', 'check eslint version')
    .option('-t, --tslint [version]', 'check tslint version')
    .option('    --nvm [version]', 'check nvm version')
    .option('    --n-mac [version]', 'check n version');

// must be before .parse() since
// node's emit() is immediate
commander.on('--help', function () {
    log();
    log('\x1b[32m  Examples:\x1b[39m');
    log();
    log('\x1b[32m %s %s --node ">=4.2.1" \x1b[39m', prompt, commander.name);
    log('\x1b[32m %s %s --help \x1b[39m', prompt, commander.name);
    log();
});

// get commander and parse all args
commander.parse(process.argv);

/* istanbul ignore else */
// start only if the process is not exited yet
if (!exited) {
    const opts = commander.opts();
    if (opts.all) {
        // prints all the versions
        ind.checkAll();
    } else {
        /* istanbul ignore else */
        // validate all input data
        if (
            !ind.validate({
                node: opts.node,
                npm: opts.npm,
                yarn: opts.yarn,
                git: opts.git,
                karma: opts.karma,
                gulp: opts.gulp,
                grunt: opts.grunt,
                eslint: opts.eslint,
                tslint: opts.tslint,
                nvm: opts.nvm,
                n: opts.nMac
            })
        ) {
            exit(1);
        }
    }

    exit(0);
}
