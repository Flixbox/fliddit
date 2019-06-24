import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Posts } from '../components'

const Filtered = ({ posts, match }) => {
    const { category } = match.params

    return (
        <Posts
            posts={posts ? posts.filter(post => post.category === category) : null}
            category={category}
        />
    )
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(withRouter(Filtered))
