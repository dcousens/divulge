module.exports = function divulge(obj, prefix, env) {
  env = env || process.env

  for (var key in obj) {
    var envKey = prefix + key.toUpperCase()
    var value = obj[key]

    if (typeof value !== 'object') {
      obj[key] = env[envKey] || value

    } else {
      divulge(value, envKey, env)
    }
  }

  return obj
}
