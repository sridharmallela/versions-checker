'use strict';

const spawn = require('child_process').spawn,
    expect = require('chai').expect,
    version = require('./../package.json').version,
    EXEC_PATH = require('path').resolve(`${__dirname}/../lib/cli`),
    TEST_HELP_SMALL = 'Usage: cli [options]',
    TEST_HELP_RES = '\n  Usage: cli [options]\n\n\n  Options:\n\n        --version           output the version number\n        --all               lists all installed versions\n    -n  --node [version]    check node version\n    -m  --npm [version]     check npm version\n    -y  --yarn [version]    check yarn version\n    -g  --git [version]     check git version\n    -k  --karma [version]   check karma version\n    -g  --gulp [version]    check gulp version\n        --grunt [version]   check grunt version\n    -e  --eslint [version]  check eslint version\n    -t  --tslint [version]  check tslint version\n        --nvm [version]     check nvm version\n        --n-mac [version]   check n version\n    -h, --help              output usage information\n\n  Examples:\n\n    $ cli --node ">=4.2.1"\n    $ cli --help\n\n';

describe('lib/cli --- ', () => {

    describe('default options as executable --- ', () => {

        it('should test help "--help" option', (done) => {
            runPrintCommand(['--help'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test help "-h" option', (done) => {
            runPrintCommand(['-h'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test missing option', (done) => {
            runPrintCommand(['-a'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test invalid option', (done) => {
            runPrintCommand(['--abc'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test version "--version" option', (done) => {
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

    describe('options as executable --- ', () => {

        it('should test "--node" option', (done) => {
            runPrintCommand(['--node', '">=0.10.0"'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('    node: ');
                done();
            });
        });

        it('should test "--npm" option', (done) => {
            runPrintCommand(['--npm', '">=1.0.0"'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('    npm: ');
                done();
            });
        });

        it('should test "--karma" option', (done) => {
            runPrintCommand(['--karma', '"1.6.0"'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('    karma: ');
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

    function onclose(code) {
        callback(null, stdout, code, stderr);
    }
}
