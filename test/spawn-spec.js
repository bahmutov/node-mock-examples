const execa = require('execa')

function listFiles () {
  return execa('ls', ['-la']).then(result => result.stdout)
}

describe('mocking child_process.spawn', () => {
  const { stubSpawnOnce } = require('stub-spawn-once')

  it('mocks spawn called by execa', () => {
    // pass exit code, stdout and stderr
    stubSpawnOnce('ls -la', 0, '2 files', '')
    return listFiles().then(text => {
      console.assert(text === '2 files', text)
    })
  })
})
