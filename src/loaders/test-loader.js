var loaderUtils = require('loader-utils')

module.exports = function (source) {
  var options = loaderUtils.getOptions(this) || {}
  if (options !== {}) {
    var replaceMap = options['replaceMap']
    for (var key in replaceMap) {
      source = source.replace(key, replaceMap[key])
    }
  }
  return source
}
