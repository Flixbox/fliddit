import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Posts } from '../components'
import { filterObject } from '../helpers/util'

const Filtered = ({ posts, match }) => {
    const { category } = match.params

    return <Posts posts={filterObject(posts, 'category', category)} category={category} />
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(withRouter(Filtered))
