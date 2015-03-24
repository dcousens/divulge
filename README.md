# divulge

This module provides a function to override default configuration [recursively] with their equivalent non-delimited uppercase names, assuming they exist in the environment.

### Example
``` javascript
var divulge = require('divulge')
var config = divulge({
  port: 8000,
  secret: {
    user: "",
    pass: ""
  }
})

// ...

console.log(config.port, config.secret.user, config.secret.pass)
```

When executed with `PORT=5000 SECRETUSER='foo' SECRETPASS='bar'` will print `5000 foo bar` to the console.
