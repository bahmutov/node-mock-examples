function yyyyMmDd () {
  const d = new Date()
  return d.toISOString().split('T')[0]
}

describe('current date with sinon', () => {
  const sinon = require('sinon')

  beforeEach(() => {
    sinon.stub(Date.prototype, 'toISOString').returns('2000-04-20T0')
  })

  afterEach(() => {
    Date.prototype.toISOString.restore()
  })

  it('things today is April 20th, 2000', () => {
    const d = yyyyMmDd()
    console.assert(d === '2000-04-20')
  })
})
