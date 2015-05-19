module.exports = function divulge (env, obj, prefix) {
  for (var key in obj) {
    var envKey = prefix + key.toUpperCase()
    var value = obj[key]

    if (typeof value !== 'object') {
      obj[key] = env[envKey] || value

    } else {
      divulge(env, value, envKey)
    }
  }

  return obj
}
