# divulge

[![TRAVIS](https://secure.travis-ci.org/dcousens/divulge.png)](http://travis-ci.org/dcousens/divulge)
[![NPM](http://img.shields.io/npm/v/divulge.svg)](https://www.npmjs.org/package/divulge)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

This module provides a function to override default configuration [recursively] with their equivalent non-delimited uppercase names, assuming they exist in the environment.

### Example

`divulge(options[, separator], process.env)`

``` javascript
var divulge = require('divulge')
var config = divulge({
  port: 8000,
  secret: {
    user: "",
    pass: ""
  }
}, '', process.env)

// ...

console.log(config.port, config.secret.user, config.secret.pass)
```

When executed with `PORT=5000 SECRETUSER='foo' SECRETPASS='bar'` in the environment, the above program will print `5000 foo bar` to the console.

If `_` had been used as a separator, then `SECRET_USER` would have equated to `secret.user` instead.


## LICENSE [MIT](LICENSE)
