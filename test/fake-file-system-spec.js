const fse = require('fs-extra')

// read all files and return concatenated text
function readFiles(...filenames) {
  return Promise.all(filenames.map(name => fse.readFile(name, 'utf8')))
    .then(contents => contents.join('\n===\n'))
}

const fakeFileSystem = {
  'foo/bar/a.txt': 'text from file foo/bar/a.txt',
  'foo/b.txt': 'text from file foo/b.txt',
  'baz.txt': `
    last file with some
    some text in file baz.txt
  `
}

describe('mocks several files by create a file system', () => {
  const mock = require('mock-fs')
  beforeEach(() => {
    mock(fakeFileSystem)
  })

  afterEach(() => {
    mock.restore()
  })

  it('several files', () => {
    return readFiles('foo/bar/a.txt', 'foo/b.txt', 'baz.txt')
      .then(text => {
        console.assert(text.includes('foo/b.txt'))
      })
  })
})

describe('using snapshot', () => {
  const mock = require('mock-fs')
  const snapshot = require('snap-shot')

  beforeEach(() => {
    mock(fakeFileSystem)
  })

  it('restores FS before trying to load snapshot', () => {
    return readFiles('foo/b.txt', 'baz.txt')
      .then(text => {
        // restore file system _before_ snapshot tries to
        // load previous snapshot file
        mock.restore()
        snapshot(text)
      })
  })
})
