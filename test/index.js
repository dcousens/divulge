var assert = require('assert')
var divulge = require('../')

var fixtures = require('./fixtures')

describe('divulge', function() {
  fixtures.forEach(function(f) {
    it(f.description + ' gives expected result', function() {
      var result = divulge(f.defaults, f.prefix, f.env)

      assert.deepEqual(result, f.expected)
    })
  })
})
