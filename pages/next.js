import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const { isServer } = query
    return { isServer }
  }

  render() {
    return (
      <div>
        Hello World. Is this the server? {this.props.isServer ? 'YES': 'NO'}
        <Link href="/">
          <a>link</a>
        </Link>
      </div>
    )
  }
}
