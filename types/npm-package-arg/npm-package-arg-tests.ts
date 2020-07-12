import npa = require('npm-package-arg');

const result1 = npa('npm-package-arg@5.1');
const result2 = npa('npm-package-arg@5.1', '..');
const result3 = npa.resolve('npm-package-arg', '^5.1.0');
const result4 = npa.resolve('npm-package-arg', '^5.1.0', '..');
npa.resolve('foo', '^1.2.3', '/test/a/b');
npa.resolve('foo', 'file:foo', '/test/a/b');
npa.resolve('foo', '../foo/bar', '/test/a/b');
// npa.resolve with no name
npa.resolve(null, '4.0.0', '/test/a/b');

const result = npa('npm-package-arg@latest');
(result instanceof npa.Result); // $ExpectType boolean
