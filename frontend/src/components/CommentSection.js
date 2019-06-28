import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Box, Input } from '@material-ui/core'

import { AddElementCard, CommentCard } from '.'
import { addComment } from '../actions/comments'

const CommentSection = ({ dispatch, comments, postId }) => {
    const [body, setBody] = useState('')
    const reset = () => setBody('')
    return (
        <Box>
            {comments.map(comment => (
                <Box mt={1} key={comment.id}>
                    <CommentCard {...comment} />
                </Box>
            ))}
            <Box mt={1}>
                <AddElementCard
                    onSubmit={() => {
                        if (!body) return null
                        dispatch(addComment({ body, parentId: postId }))
                        reset()
                    }}
                >
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
