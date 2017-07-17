const cp = require('child_process')

function runCommand (cmd) {
  return new Promise((resolve, reject) => {
    cp.exec(cmd, (err, stdout, stderr) => {
      if (err) {
        return reject(err)
      }
      resolve(stdout)
    })
  })
}

function hello () {
  return runCommand('echo "hello"')
}

describe('mocking child_process.exec', () => {
  const { stubExecOnce } = require('stub-spawn-once')

  it('mocks exec', () => {
    stubExecOnce('echo "hello"', 'bye')
    return hello().then(text => {
      console.assert(text === 'bye')
    })
  })
})
