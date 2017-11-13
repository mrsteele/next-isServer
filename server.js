// server.js
const next = require('next')
const isServer = require('./index.js')
const routes = require('next-routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = isServer(app)
// const hander2 = routes(app)

// console.log('APP', app.constructor.name)
// console.log('next-routes', hander2.constructor.name)

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})
