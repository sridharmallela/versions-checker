#!/usr/bin/env node

'use strict';

var prog = require('programmer'),
    ind = require('./index'),
    com = prog.commander,
    prompt = prog.promptMessage;

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
com.on('--help', function() {
    console.log('\x1b[32m');
    console.log('  Examples:');
    console.log();
    console.log(prompt(com.name() + ' --node ">=4.2.1"'));
    console.log(prompt(com.name() + ' --help'));
    console.log('\x1b[39m');
});

// get commander and parse all args
com.parse(process.argv);

/* istanbul ignore else */
// start only if the process is not exited yet
if (!prog.exited) {

    try {

        if (com.all) {
            // prints all the versions
            ind.checkAll();
        } else {
            /* istanbul ignore else */
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
                prog.exit(1);
            }
        }
    } catch (e) {
        /* istanbul ignore next */
        throw e;
    }
    prog.exit(0);
}