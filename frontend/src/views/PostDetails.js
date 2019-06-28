import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Box, Typography } from '@material-ui/core'

import { loadCommentSection } from '../actions/comments'
import { PostCard, CommentSection } from '../components'

const PostDetails = ({ dispatch, match, post, comments }) => {
    const { postId } = match.params

    useEffect(() => {
        const load = () => dispatch(loadCommentSection({ postId }))
        load()
    }, [postId, dispatch])

    return (
        <Box>
            {post ? (
                <>
                    <PostCard {...post} />
                    <CommentSection comments={comments} />
                </>
            ) : (
                <Typography>No post found! It may have been deleted.</Typography>
            )}
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
