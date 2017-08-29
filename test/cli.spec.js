'use strict';

const spawn = require("child_process").spawn,
    expect = require("chai").expect,
    version = require('./../package.json').version,
    EXEC_PATH = require('path').resolve(`${__dirname}/../lib/cli`),
    TEST_HELP_SMALL = 'Usage: cli [options]',
    TEST_HELP_RES = '\n  Usage: cli [options]\n\n\n  Options:\n\n        --version    output the version number\n    -n  --node       check node version\n        --npm        check npm version\n    -y  --yarn       check yarn version\n    -g  --git        check git version\n    -k  --karma      check karma version\n    -m  --mocha      check mocha version\n    -g  --gulp       check gulp version\n        --grunt      check grunt version\n    -e  --eslint     check eslint version\n    -t  --tslint     check tslint version\n    -p  --print-cli  check print-cli version\n    -h, --help       output usage information\n\n  Examples:\n\n    $ cli --node ">=4.2.1"\n    $ cli --help\n\n';

describe('lib/cli --- ', () => {

    describe('default options as executable --- ', () => {

        it('test print help "--help"', (done) => {
            runPrintCommand(['--help'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('test print help "-help"', (done) => {
            runPrintCommand(['-h'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('test print help missing option', (done) => {
            runPrintCommand(['-a'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('test print help invalid option', (done) => {
            runPrintCommand(['--abc'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('test print version "--version"', (done) => {
            runPrintCommand(['--version'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(version);
                expect(stdout).to.eql(version + '\n');
                done();
            });
        });
    });

    describe('check version executable --- ', () => {

        it('test print "TEST DATA"', (done) => {
            runPrintCommand(['--node'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_RES);
                done();
            });
        });
    });
});

function runPrintCommand(args, callback) {

    expect(args).not.to.be.empty;
    expect(args.length).to.be.greaterThan(0);
    expect(args[0]).not.to.be.undefined;

    runRawCommand(args, function (err, stdout) {
        callback(err, stdout);
    });
}

function runRawCommand(args, callback) {

    var argv = [EXEC_PATH].concat(args),
        exec = process.argv[0],
        stderr = '',
        stdout = '';

    const child = spawn(exec, argv, {});

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (str) {
        stdout += String(str);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (str) {
        stderr += String(str);
    });

    child.on('close', onclose);
    child.on('error', callback);

    // child.kill('SIGINT');

    function onclose(code) {
        callback(null, stdout, code, stderr);
    }
}
