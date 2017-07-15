const fs = require('fs')

function read(filename, cb) {
  fs.readFile(filename, 'utf8', cb)
}

describe('mocking fs methods with callbacks', () => {
  const sinon = require('sinon')

  beforeEach(() => {
    // because fs.readFile calls 3rd argument with (err, text)
    // we use .callsArgWith with index 2,
    // null error and fake file contents
    sinon.stub(fs, 'readFile')
      .withArgs('foo.txt', 'utf8')
      .callsArgWith(2, null, 'fake text')
  })

  afterEach(() => {
    // restore individual methods
    fs.readFile.restore()
  })

  it('reads non-existent file', (done) => {
    read('foo.txt', (err, text) => {
      console.assert(!err, 'no error expected')
      console.assert(text === 'fake text', text)
      done()
    })
  })
})
