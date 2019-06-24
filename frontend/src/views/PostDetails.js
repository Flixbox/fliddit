import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { loadCommentSection } from '../actions/comments'
import { PostCard, CommentSection } from '../components'

const useStyles = makeStyles(theme => ({}))

const PostDetails = ({ dispatch, match, posts, comments }) => {
    const { category, postId } = match.params

    useEffect(() => {
        const load = () => dispatch(loadCommentSection({ postId }))
        load()
    }, [postId, dispatch])

    // Find the first post that matches our ID
    const post = posts ? posts.filter(post => post.id === postId)[0] : null

    console.log(post)

    return (
        <Box>
            <PostCard {...post} />
            <CommentSection comments={comments} />
        </Box>
    )
}

const mapStateToProps = ({ comments, posts, dispatch }) => ({ comments, posts, dispatch })

export default connect(mapStateToProps)(withRouter(PostDetails))
