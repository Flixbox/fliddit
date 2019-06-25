import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { loadCommentSection } from '../actions/comments'
import { PostCard, CommentSection } from '../components'

const useStyles = makeStyles(theme => ({}))

const PostDetails = ({ dispatch, match, post, comments }) => {
    const { postId } = match.params

    // Does not rerender on delete
    console.log('Rerender PostDetails')

    useEffect(() => {
        const load = () => dispatch(loadCommentSection({ postId }))
        load()
    }, [postId, dispatch])

    return (
        <Box>
            {post ? <PostCard {...post} /> : <Typography>No post found!</Typography>}

            <CommentSection comments={comments} />
        </Box>
    )
}

// TODO Move my filter stuff down here
const mapStateToProps = ({ comments, posts, dispatch }, { match }) => {
    const { postId } = match.params
    return {
        comments,
        // Find the first post that matches our ID
        post: posts ? posts.filter(post => post.id === postId)[0] : null,
        dispatch,
    }
}

export default connect(mapStateToProps)(withRouter(PostDetails))
