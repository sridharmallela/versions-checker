'use strict';

const expect = require('chai').expect,
    version = require('./../package.json').version,
    TEST_HELP_SMALL = 'Usage: cli [options]',
    TEST_HELP_RES = '\n  Usage: cli [options]\n\n\n  Options:\n\n        --version           output the version number\n        --all               lists all installed versions\n    -s  --silent            will not exit even versions didn\'t match\n    -n  --node [version]    check node version\n    -m  --npm [version]     check npm version\n    -y  --yarn [version]    check yarn version\n    -g  --git [version]     check git version\n    -k  --karma [version]   check karma version\n        --gulp [version]    check gulp version\n        --grunt [version]   check grunt version\n    -e  --eslint [version]  check eslint version\n    -t  --tslint [version]  check tslint version\n        --nvm [version]     check nvm version\n        --n-mac [version]   check n version\n    -h, --help              output usage information\n\u001b[32m\n  Examples:\n\n    $ cli --node ">=4.2.1"\n    $ cli --help\n\u001b[39m\n';

describe('lib/cli --- ', () => {

    describe('default options as executable --- ', () => {

        it('should test help "--help" option', (done) => {
            runVersionCheckerCommand(['--help'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test help "-h" option', (done) => {
            runVersionCheckerCommand(['-h'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test missing option', (done) => {
            runVersionCheckerCommand(['-a'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test invalid option', (done) => {
            runVersionCheckerCommand(['--abc'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(TEST_HELP_SMALL);
                expect(stdout).to.eql(TEST_HELP_RES);
                done();
            });
        });

        it('should test version "--version" option', (done) => {
            runVersionCheckerCommand(['--version'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain(version);
                expect(stdout).to.eql(version + '\n');
                done();
            });
        });
    });

    describe('executable ---- ', () => {

        it('should test to --all', (done) => {
            runVersionCheckerCommand(['--all'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('node: ');
                expect(stdout).to.contain('npm: ');
                done();
            });
        });

        it('should test to validate node version', (done) => {
            runVersionCheckerCommand(['--node', '>=4'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('node: ');
                done();
            });
        });

        it('should test to validate npm version', (done) => {
            runVersionCheckerCommand(['--npm', '>1'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('npm: ');
                done();
            });
        });

        it('should test to validate node version invalid', (done) => {
            runVersionCheckerCommand(['--node', '0.12.3'], (err, stdout) => {
                expect(err).to.be.eql(null);
                expect(stdout).not.to.be.empty;
                expect(stdout).not.to.be.undefined;
                expect(stdout).to.contain('node: ');
                expect(stdout).to.contain('but expected is 0.12.3');
                done();
            });
        });
    });
});

function runVersionCheckerCommand(args, callback) {
    expect(args).not.to.be.empty;
    expect(args.length).to.be.greaterThan(0);
    expect(args[0]).not.to.be.undefined;
    require('programmer').runCommand(require('path').resolve(`${__dirname}/cli`), args, callback);
}