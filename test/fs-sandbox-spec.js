const fs = require('fs')

function readFile(filename) {
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, 'utf8')
  }
  throw new Error('Cannot find file ' + filename)
}

describe('restoring all methods using sandbox', () => {
  const sinon = require('sinon')
  const sandbox = sinon.sandbox.create()

  beforeEach(() => {
    sandbox.stub(fs, 'existsSync')
      .withArgs('foo.txt')
      .returns('true')
    sandbox.stub(fs, 'readFileSync')
      .withArgs('foo.txt', 'utf8')
      .returns('fake text')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('reads non-existent file', () => {
    console.assert(readFile('foo.txt') === 'fake text')
  })
})
