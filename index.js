// overrides provided fields recursively with their equivalent: no-space uppercase names if they exist in process.env
module.exports = function divulge(obj, prefix) {
  for (var key in obj) {
    var envKey = prefix + key.toUpperCase()
    var value = obj[key]

    if (typeof value !== 'object') {
      obj[key] = process.env[envKey] || value

    } else {
      divulge(value, envKey)
    }
  }

  return obj
}
