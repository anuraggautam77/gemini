## Gemini
[Gemini](https://github.com/gemini-testing/gemini) is a utility for regression testing the visual appearance of web pages.

Gemini allows you to:
- Work with different browsers
- Test separate sections of a web page
- Include the box-shadow and outline properties when calculating element position and size
- Ignore some special case differences between images (rendering artifacts, text caret, etc.)
- Gather CSS test coverage statistics

Gemini was created at Yandex and is especially useful to UI library developers.

# Installing
```sh
$ npm install -g gemini
$ npm install -g selenium-standalone
$ selenium-standalone install
```

# Running tests
Start selenium-standalone in a separate tab before running the tests:
```sh
$ selenium-standalone start
```
Run gemini tests:
```sh
gemini test
```
or run command from package.json
```sh
$ npm run test
```
