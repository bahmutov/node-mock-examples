const mockIo = require('mock-stdio')
const snapshot = require('snap-shot')

describe('console example', () => {
  it('saves console calls', () => {
    mockIo.start()
    console.log('first line')
    console.log('second line with "%s" and %d', 'foo', 42)
    console.log('even groups of messages')
    console.error(`
      and a simple error text
      over several lines
    `)
    /*
    Note that is is best to use the mock directly inside the test,
    rather than in before or after functions, as it will not be possible
    for anything within the node process to log to stdout and stderr,
    meaning you may lose messages that are printed by your test framework.
    */
    const result = mockIo.end()
    snapshot(result.stdout)
    snapshot(result.stderr)
  })
})
