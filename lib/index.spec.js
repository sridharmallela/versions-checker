const childProcess = require('child_process'),
    expect = require('chai').expect,
    sinon = require('sinon'),
    testCandidate = require('./../lib/index');

describe('lib/index --- ', () => {

    var childProcessSpy,
        sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        expect(testCandidate).not.to.be.null;
        expect(childProcess).not.to.be.null;
        childProcessSpy = sandbox.stub(childProcess, 'execSync');
    });

    afterEach(() => {
        expect(childProcessSpy).not.to.be.null;
        childProcessSpy.restore();
    });

    it('should check for node --version', () => {
        expect(childProcessSpy.notCalled).to.be.true;
        testCandidate.validate({
            node: '>=0.10'
        });
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.calledOnce).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(1);
        expect(childProcessSpy.getCall(0).args[0]).to.be.eql('node --version');
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({
            cwd: './node_modules/.bin/'
        });
    });

    it('should check for --all', () => {
        testCandidate.checkAll();
        expect(childProcessSpy.called).to.be.true;
        expect(childProcessSpy.callCount).to.be.eql(11);
        expect(childProcessSpy.getCall(0).args[1]).to.be.eql({
            cwd: './node_modules/.bin/'
        });
        expect(childProcessSpy.getCall(1).args[1]).to.be.eql({
            cwd: './node_modules/.bin/'
        });
    });
});