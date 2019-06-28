import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Input } from '@material-ui/core'

import { AddElementCard, CommentCard } from '.'
import { addComment, ADD_COMMENT } from '../actions/comments'

const CommentSection = ({ dispatch, comments, postId }) => {
    const [body, setBody] = useState('')
    const [retryMode, setRetryMode] = useState(false)
    const reset = () => setBody('')
    const submitData = () => {
        if (!body) return null
        // Only reset the form if we are successful
        dispatch(addComment({ body, parentId: postId })).then(({ type }) =>
            type === `${ADD_COMMENT}_SUCCESS` ? reset() : setRetryMode(true)
        )
    }
    return (
        <Box>
            {comments.map(comment => (
                <Box mt={1} key={comment.id}>
                    <CommentCard {...comment} />
                </Box>
            ))}
            <Box mt={1}>
                <AddElementCard onSubmit={submitData} retryMode={retryMode} onRetry={submitData}>
                    <Input
                        fullWidth
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder="Write a comment..."
                    />
                </AddElementCard>
            </Box>
        </Box>
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(CommentSection)
