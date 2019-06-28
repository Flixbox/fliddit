import React from 'react'
import { Box } from '@material-ui/core'

import CommentCard from './CommentCard'

const CommentSection = ({ comments }) => {
    return (
        <Box>
            {comments.map(comment => (
                <Box mt={1} key={comment.id}>
                    <CommentCard {...comment} />
                </Box>
            ))}
        </Box>
    )
}

export default CommentSection
