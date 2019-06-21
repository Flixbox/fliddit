import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Posts } from '../components'

const Filtered = ({ posts, match }) => {
    const { category } = match.params

    /**
     * Converts the posts object to an array, then filters it by category, then converts it back into an object.
     *
     * @see https://stackoverflow.com/questions/38750705/filter-object-properties-by-key-in-es6
     * @param {Object} posts
     * @returns {Object} The posts object, filtered by category.
     */
    const filterPosts = posts =>
        posts &&
        Object.keys(posts)
            .filter(index => posts[index].category === category)
            .reduce((obj, key) => {
                obj[key] = posts[key]
                return obj
            }, {})

    return <Posts posts={filterPosts(posts)} category={category} />
}

const mapStateToProps = ({ posts }) => ({ posts })

export default connect(mapStateToProps)(withRouter(Filtered))
