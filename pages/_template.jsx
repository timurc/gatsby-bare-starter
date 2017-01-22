import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
          <Link to={prefixLink('/')}>
            Link home...
          </Link>
          {this.props.children}
      </div>
    )
  },
})
