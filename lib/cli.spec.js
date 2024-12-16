'use strict';

const { version } = require('./../package.json');
const TEST_HELP_SMALL = 'Usage: cli [options]';

describe('lib/cli --- ', () => {
  describe('default options as executable --- ', () => {
    test('should test help "--help" option', done => {
      runVersionCheckerCommand(['--help'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain(TEST_HELP_SMALL);
        done();
      });
    });

    test('should test help "-h" option', done => {
      runVersionCheckerCommand(['-h'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain(TEST_HELP_SMALL);
        done();
      });
    });

    test('should test missing option', done => {
      runVersionCheckerCommand(['-a'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain(TEST_HELP_SMALL);
        done();
      });
    });

    test('should test invalid option', done => {
      runVersionCheckerCommand(['--abc'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain(TEST_HELP_SMALL);
        done();
      });
    });

    test('should test version "--version" option', done => {
      runVersionCheckerCommand(['--version'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain(version);
        expect(stdout).toEqual(version + '\n');
        done();
      });
    });
  });

  describe('executable ---- ', () => {
    test('should test to --all', done => {
      runVersionCheckerCommand(['--all'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain('node: ');
        expect(stdout).toContain('npm: ');
        done();
      });
    });

    test('should test to validate node version', done => {
      runVersionCheckerCommand(['--node', '>=4'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain('node: ');
        done();
      });
    });

    test('should test to validate npm version', done => {
      runVersionCheckerCommand(['--npm', '>1'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain('npm: ');
        done();
      });
    });

    test('should test to validate node version invalid', done => {
      runVersionCheckerCommand(['--node', '0.12.3'], (err, stdout) => {
        expect(err).toBeNull();
        expect(stdout).toBeDefined();
        expect(stdout).toContain('node: ');
        expect(stdout).toContain('but expected is 0.12.3');
        done();
      });
    });
  });
});

function runVersionCheckerCommand(args, callback) {
  expect(args).toBeDefined();
  expect(args.length).toBeGreaterThan(0);
  expect(args[0]).toBeDefined();
  require('programmer').runCommand(
    require('path').resolve(`${__dirname}/cli`),
    args,
    callback
  );
}
