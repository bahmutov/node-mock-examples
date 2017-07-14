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
* [ ] async `fs` methods
* [ ] entire file system with [mock-fs][mock-fs]
* [ ] network request with [nock][nock]
* [ ] `child_process.spawn`
* [ ] `child_procesa.exec`
* [ ] `setTimeout` with fake timer

All examples use [Mocha][https://mochajs.org/] test framework, but do not
rely on anything Mocha-specific.

[sinon]: http://sinonjs.org/
[sinon sandbox]: http://sinonjs.org/releases/v2.3.8/sandbox/
[mock-fs]: https://github.com/tschaub/mock-fs
[nock]: https://github.com/node-nock/nock#readme

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

[ci-image]: https://travis-ci.org/bahmutov/node-mock-examples.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/node-mock-examples
