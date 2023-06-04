'use strict';

const { expect } = require('chai');
const sinon = require('sinon');
const childProcess = require('child_process');
const testCandidate = require('./index');

describe('lib/index --- ', () => {
    var sandbox;
    var childProcessSpy;

    before(() => {
        sandbox = sinon.createSandbox();
    });

    beforeEach(() => {
        expect(testCandidate).not.to.be.null;
        expect(testCandidate.options).not.to.be.null;
        expect(testCandidate.findOutVersion).not.to.be.null;
        childProcessSpy = sandbox.stub(childProcess, 'execSync');
    });

    afterEach(() => {
        childProcessSpy.restore();
    });

    after(() => {
        sandbox.restore();
    });

    it('should check for node --version', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        childProcessSpy.returns('1.0.0');
        expect(testCandidate.validate()).to.be.false;
        expect(childProcessSpy.notCalled).to.be.true;
        expect(testCandidate.validate({})).to.be.false;
        expect(childProcessSpy.notCalled).to.be.true;
        testCandidate.validate({ node: '>=0.10' });
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.calledOnce).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(1);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('node --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
    });

    it('should check for npm --version', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        childProcessSpy.returns('1.0.0');
        testCandidate.validate({ node: '>0.10', npm: '3.0.0' });
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.calledTwice).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(2);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('node --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(1).args[0]).to.be.eql('npm --version');
        expect(childProcessSpy.getCall(1).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
    });

    it('should check for gulp --version to threw error', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        childProcessSpy.throws();
        testCandidate.validate({ gulp: '0.10' });
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.calledOnce).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(1);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('gulp --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
    });

    it('should check for --all', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        childProcessSpy.returns('1.0.0');
        expect(testCandidate.checkAll()).to.be.eql({
            eslint: '1.0.0',
            git: '1.0.0',
            grunt: '1.0.0',
            gulp: '1.0.0',
            karma: '1.0.0',
            n: '1.0.0',
            node: '1.0.0',
            npm: '1.0.0',
            nvm: '1.0.0',
            tslint: '1.0.0',
            yarn: '1.0.0'
        });
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(11);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('node --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(1).args[0]).to.be.eql('npm --version');
        expect(childProcessSpy.getCall(1).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(2).args[0]).to.be.eql('yarn --version');
        expect(childProcessSpy.getCall(2).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(3).args[0]).to.be.eql('git --version');
        expect(childProcessSpy.getCall(3).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(4).args[0]).to.be.eql('karma --version');
        expect(childProcessSpy.getCall(4).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(5).args[0]).to.be.eql('gulp --version');
        expect(childProcessSpy.getCall(5).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(6).args[0]).to.be.eql('grunt --version');
        expect(childProcessSpy.getCall(6).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });

        expect(childProcessSpy.getCall(4).args[0]).to.be.eql('karma --version');
        expect(childProcessSpy.getCall(4).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(5).args[0]).to.be.eql('gulp --version');
        expect(childProcessSpy.getCall(5).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(6).args[0]).to.be.eql('grunt --version');
        expect(childProcessSpy.getCall(6).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(7).args[0]).to.be.eql('eslint --version');
        expect(childProcessSpy.getCall(7).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(8).args[0]).to.be.eql('tslint --version');
        expect(childProcessSpy.getCall(8).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(9).args[0]).to.be.eql('nvm --version');
        expect(childProcessSpy.getCall(9).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(10).args[0]).to.be.eql('n --version');
        expect(childProcessSpy.getCall(10).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
    });

    it('should check for --all throws an error', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        childProcessSpy.throws();
        expect(testCandidate.checkAll()).to.be.eql({});
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(11);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('node --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(1).args[0]).to.be.eql('npm --version');
        expect(childProcessSpy.getCall(1).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(2).args[0]).to.be.eql('yarn --version');
        expect(childProcessSpy.getCall(2).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(3).args[0]).to.be.eql('git --version');
        expect(childProcessSpy.getCall(3).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(4).args[0]).to.be.eql('karma --version');
        expect(childProcessSpy.getCall(4).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(5).args[0]).to.be.eql('gulp --version');
        expect(childProcessSpy.getCall(5).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(6).args[0]).to.be.eql('grunt --version');
        expect(childProcessSpy.getCall(6).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });

        expect(childProcessSpy.getCall(4).args[0]).to.be.eql('karma --version');
        expect(childProcessSpy.getCall(4).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(5).args[0]).to.be.eql('gulp --version');
        expect(childProcessSpy.getCall(5).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(6).args[0]).to.be.eql('grunt --version');
        expect(childProcessSpy.getCall(6).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(7).args[0]).to.be.eql('eslint --version');
        expect(childProcessSpy.getCall(7).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(8).args[0]).to.be.eql('tslint --version');
        expect(childProcessSpy.getCall(8).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(9).args[0]).to.be.eql('nvm --version');
        expect(childProcessSpy.getCall(9).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
        expect(childProcessSpy.getCall(10).args[0]).to.be.eql('n --version');
        expect(childProcessSpy.getCall(10).args[1]).to.be.eql({ cwd: './node_modules/.bin/' });
    });
});
