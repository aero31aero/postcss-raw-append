let postcss = require('postcss')

module.exports = postcss.plugin('postcss-raw-append', (opts = { }) => {
  return root => {
    if (!opts.data) {
      // We don't have anything to append, do nothing.
      return
    }
    // Transform CSS AST here
    root.append(`\n\n${ opts.data }`)
  }
})
