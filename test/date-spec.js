function yyyyMmDd () {
  const d = new Date()
  return d.toISOString().split('T')[0]
}

describe('current date', () => {
  const MockDate = require('mockdate')
  it('things today is April 20th, 2000', () => {
    MockDate.set('4/20/2000')
    const d = yyyyMmDd()
    console.assert(d === '2000-04-20')
    MockDate.reset()
  })
})
