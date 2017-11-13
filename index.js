const { parse } = require('url')

module.exports = (app) => {
  // const nextHandler = app.getRequestHandler()

  return (req, res) => {
    // nextHandler(req, res)
    const isServer = typeof window === 'undefined'
    const parsedUrl = parse(req.url, true)

    app.render(req, res, req.url, { isServer, ...parsedUrl.query})
  }
}
