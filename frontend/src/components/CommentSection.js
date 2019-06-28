import React from 'react'
import { Box } from '@material-ui/core'

import { AddElementCard, CommentCard } from '.'

const CommentSection = ({ comments }) => {
    return (
        <Box>
            {comments.map(comment => (
                <Box mt={1} key={comment.id}>
                    <CommentCard {...comment} />
                </Box>
            ))}
            <Box mt={1}>
                <AddElementCard />
            </Box>
        </Box>
    )
}

export default CommentSection
