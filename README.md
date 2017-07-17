# node-mock-examples

> Examples of tests that mock Node system APIs: fs, http, child_process, timers

[![Build status][ci-image] ][ci-url]

Practical working test examples for blog post
[Mock system APIs](https://glebbahmutov.com/blog/mock-system-apis/).
Because mocking the *stable, well documented* Node system APIs is easier
than stubbing your own internal code. And simpler to update in the future!

## Mocking examples

* [x] [spec](test/fs-call-spec.js) individual synchronous `fs` methods with [sinon][sinon]
* [x] [spec](test/fs-sandbox-spec.js) restoring all mocked methods via [sinon sandbox][sinon sandbox]
* [x] [spec](test/console-spec.js) console mocking with [mock-stdio](https://github.com/catdad/mock-stdio)
* [x] [spec](test/fs-callback-spec.js) async `fs` methods
* [x] [spec](test/fake-file-system-spec.js) entire file system with [mock-fs][mock-fs]
* [x] [spec](test/network-spec.js) network request with [nock][nock]
* [x] [spec](test/exec-spec.js) mocks `child_process.exec` call using [stub-spawn-once][stub-spawn-once]
* [x] [spec](test/spawn-spec.js) mocks `child_process.spawn` call using [stub-spawn-once][stub-spawn-once]
* [x] [spec](test/interval-spec.js) mocks `setInterval` (same for `setTimeout`) with fake timers using [sinon][sinon]

All examples use [Mocha](https://mochajs.org/) test framework, but do not
rely on anything Mocha-specific.

[sinon]: http://sinonjs.org/
[sinon sandbox]: http://sinonjs.org/releases/v2.3.8/sandbox/
[mock-fs]: https://github.com/tschaub/mock-fs
[nock]: https://github.com/node-nock/nock#readme
[stub-spawn-once]: https://github.com/bahmutov/stub-spawn-once

## Have a suggestion or an example to add?

File an [issue](https://github.com/bahmutov/node-mock-examples/issues/new)!

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

[ci-image]: https://travis-ci.org/bahmutov/node-mock-examples.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/node-mock-examples
