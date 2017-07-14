# node-mock-examples

> Examples of tests that mock Node system APIs: fs, http, child_process, timers

Practical working test examples for blog post
[Mock system APIs](https://glebbahmutov.com/blog/mock-system-apis/).
Because mocking the *stable, well documented* Node system APIs is easier
than stubbing your own internal code. And simpler to update in the future!

## Mocking examples

* [x] [spec](test/fs-call-spec.js) individual `fs` methods with [sinon][sinon]
* [ ] restoring all mocked methods via sandbox
* [ ] file system with [mock-fs][mock-fs]
* [ ] network request with [nock][nock]
* [ ] `child_process.spawn`
* [ ] `child_procesa.exec`
* [ ] `setTimeout` with fake timer

All examples use [Mocha][https://mochajs.org/] test framework, but do not
rely on anything Mocha-specific.

[sinon]: http://sinonjs.org/
[mock-fs]: https://github.com/tschaub/mock-fs
[nock]: https://github.com/node-nock/nock#readme
