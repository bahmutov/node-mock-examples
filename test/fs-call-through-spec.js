const fs = require('fs')

describe('allow non-mocked calls through', () => {
  const sinon = require('sinon')

  beforeEach(() => {
    const stub = sinon.stub(fs, 'existsSync')
    // fs.existsSync("foo.txt") should return true
    stub.withArgs('foo.txt').returns(true)
    // every other call should call the original fs.existsSync and return
    // the actual file existence
    stub.callThrough()
  })

  afterEach(() => {
    // restore individual methods
    fs.existsSync.restore()
  })

  it('fake file foo.txt exists', () => {
    console.assert(fs.existsSync('foo.txt'))
  })

  it('fake file bar.txt does NOT exist', () => {
    console.assert(!fs.existsSync('bar.txt'))
  })

  it('this file exists', () => {
    console.assert(fs.existsSync(__filename))
  })
})
