import React from 'react'
import { connect } from 'react-redux'
import { Posts } from '../components'

const Root = ({ posts }) => {
    return <Posts posts={posts} />
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(Root)
