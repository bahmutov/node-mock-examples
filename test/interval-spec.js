// calls given callback function every 60 seconds
function oncePerMinute (cb) {
  let counter = 0
  setInterval(() => {
    counter += 1
    cb(counter)
  }, 60 * 1000)
}

describe('interval mocking', () => {
  const sinon = require('sinon')

  it('calls given function once per minute', () => {
    const spy = sinon.spy()
    const clock = sinon.useFakeTimers()
    oncePerMinute(spy)
    clock.tick(30000)
    console.assert(!spy.called, 'not called after 30 seconds')

    clock.tick(30001)
    console.assert(spy.calledOnce, 'called once')

    clock.tick(60001)
    console.assert(spy.calledTwice, 'called twice')

    clock.restore()
  })
})
