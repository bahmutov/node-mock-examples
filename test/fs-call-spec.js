const fs = require('fs')

function readFile (filename) {
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, 'utf8')
  }
  throw new Error('Cannot find file ' + filename)
}

describe('mocking individual fs sync methods', () => {
  const sinon = require('sinon')

  beforeEach(() => {
    sinon.stub(fs, 'existsSync').withArgs('foo.txt').returns(true)
    sinon
      .stub(fs, 'readFileSync')
      .withArgs('foo.txt', 'utf8')
      .returns('fake text')
  })

  afterEach(() => {
    // restore individual methods
    fs.existsSync.restore()
    fs.readFileSync.restore()
  })

  it('reads non-existent file', () => {
    console.assert(readFile('foo.txt') === 'fake text')
  })
})
