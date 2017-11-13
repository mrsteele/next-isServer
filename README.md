# next-isServer

A simple plugin to check if `getInitialProps` was loaded on the server or the client.

### How to use

##### Install

First you need to install the package locally to your project:

```
npm i next-isserver --save
```

Create your server file if you have not yet already:

```js
// server.js
const next = require('next')
const isServer = require('./index.js')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = isServer(app)

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})

```

Update your `package.json` file scripts if needed:

```json
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
```

##### Client


In any of your files that use the `getInitialProps` function, you can access `isServer` from the `query` property like so:

```js
import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const { isServer } = query
    return { isServer }
  }

  render() {
    return (
      <div>
        Hello World. Is this the server? {this.props.isServer ? 'YES': 'NO'}
      </div>
    )
  }
}
```

### License

MIT
