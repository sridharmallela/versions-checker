'use strict';

const childProcess = require('child_process');
const testCandidate = require('./index');

describe('lib/index --- ', () => {
  var childProcessSpy;

  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  beforeEach(() => {
    expect(testCandidate).toBeDefined();
    expect(testCandidate.options).toBeDefined();
    childProcessSpy = jest.spyOn(childProcess, 'execSync');
  });

  afterEach(() => {
    childProcessSpy.mockRestore();
  });

  test('should check for node --version', () => {
    expect(childProcessSpy).not.toHaveBeenCalled();
    childProcessSpy.mockReturnValue('1.0.0');
    expect(testCandidate.validate()).toEqual(false);
    expect(childProcessSpy).not.toHaveBeenCalled();
    expect(testCandidate.validate({})).toEqual(false);
    expect(childProcessSpy).not.toHaveBeenCalled();
    testCandidate.validate({ node: '>=0.10' });
    expect(childProcessSpy).toHaveBeenCalled();
    expect(childProcessSpy).toHaveBeenCalledTimes(1);
    expect(childProcessSpy).toHaveBeenNthCalledWith(1, 'node --version', {
      cwd: './node_modules/.bin/'
    });
  });

  test('should check for npm --version', () => {
    expect(childProcessSpy).not.toHaveBeenCalled();
    childProcessSpy.mockReturnValue('1.0.0');
    testCandidate.validate({ node: '>0.10', npm: '3.0.0' });
    expect(childProcessSpy).toHaveBeenCalled();
    expect(childProcessSpy).toHaveBeenCalledTimes(2);
    expect(childProcessSpy).toHaveBeenNthCalledWith(1, 'node --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(2, 'npm --version', {
      cwd: './node_modules/.bin/'
    });
  });

  test('should check for npm --version to threw error', () => {
    expect(childProcessSpy).not.toHaveBeenCalled();
    childProcessSpy.mockImplementation(() => {
      throw new Error();
    });
    testCandidate.validate({ npm: '0.10' });
    expect(childProcessSpy).toHaveBeenCalled();
    expect(childProcessSpy).toHaveBeenCalledTimes(1);
    expect(childProcessSpy).toHaveBeenNthCalledWith(1, 'npm --version', {
      cwd: './node_modules/.bin/'
    });
  });

  test('should check for --all', () => {
    expect(childProcessSpy).not.toHaveBeenCalled();
    childProcessSpy.mockReturnValue('1.0.0');
    expect(testCandidate.checkAll()).toEqual({
      eslint: '1.0.0',
      git: '1.0.0',
      node: '1.0.0',
      npm: '1.0.0',
      yarn: '1.0.0'
    });
    expect(childProcessSpy).toHaveBeenCalled();
    expect(childProcessSpy).toHaveBeenCalledTimes(5);
    expect(childProcessSpy).toHaveBeenNthCalledWith(1, 'node --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(2, 'npm --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(3, 'yarn --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(4, 'git --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(5, 'eslint --version', {
      cwd: './node_modules/.bin/'
    });
  });

  test('should check for --all throws an error', () => {
    expect(childProcessSpy).not.toHaveBeenCalled();
    childProcessSpy.mockImplementation(() => {
      throw new Error();
    });
    expect(testCandidate.checkAll()).toEqual({});
    expect(childProcessSpy).toHaveBeenCalled();
    expect(childProcessSpy).toHaveBeenCalledTimes(5);
    expect(childProcessSpy).toHaveBeenNthCalledWith(1, 'node --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(2, 'npm --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(3, 'yarn --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(4, 'git --version', {
      cwd: './node_modules/.bin/'
    });
    expect(childProcessSpy).toHaveBeenNthCalledWith(5, 'eslint --version', {
      cwd: './node_modules/.bin/'
    });
  });
});
