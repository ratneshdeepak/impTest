# For impTest Developers

[Node.js 4.0+](https://nodejs.org/en/) is required for development.
Once `node` and `npm` are installed, to install *impTest* please download imptest source:
`git clone <repo-url-goes-here> imptest`
Then you have to install all dependency via command
`cd imptest
npm i
`

*impTest* is prepared to be executed now:

```bash
src/cli/imptest.js <command> [options] [arguments]
```

eg:

```bash
src/cli/imptest.js test -c samples/sample1/.imptest
```

## Testing impTest

Jasmine test suite is included with the project.

The following environment variables need to be set before spec run: 

- SPEC_DEBUG {true|false} � Enables/disables debug output
- SPEC_MODEL_ID � Model Id to use for tests
- SPEC_DEVICE_ID/SPEC_DEVICE_IDS � Device Id/Ids (comma-separated) to use for tests

Then `npm test`. Some tests are designed to be failed, so the result of test execution will be printed at the end of log.

On *Windows* you have to correct _package.json_ file, line `    "test": "node_modules/jasmine/bin/jasmine.js"` have to be replaced with `    "test": "node node_modules/jasmine/bin/jasmine.js"`.

For example:

```bash
SPEC_DEBUG=false SPEC_MODEL_ID=Lu55555OJHZT SPEC_DEVICE_IDS=237d555558a609ee npm test
```

## License

The code in this repository is licensed under [MIT License](../LICENSE).