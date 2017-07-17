const got = require('got')

function getRepoDescription (owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`
  return got(url, { json: true })
    .then(response => response.body)
    .then(info => info.description)
}

describe('mocking network calls', () => {
  const nock = require('nock')
  const description = 'fake text'

  beforeEach(() => {
    nock('https://api.github.com')
      .get('/repos/no-such-user/does-not-exist')
      .reply(200, { description })
    // nothing to clean up, the nock intercepts are single use
  })

  it('gets github repo description', () => {
    return getRepoDescription('no-such-user', 'does-not-exist').then(text => {
      console.assert(text === description)
    })
  })
})
