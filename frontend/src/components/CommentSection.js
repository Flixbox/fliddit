import React, { useState } from 'react'
import { Box, Input } from '@material-ui/core'

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
                <AddElementCard>
                    <Input fullWidth />
                </AddElementCard>
            </Box>
        </Box>
    )
}

export default CommentSection
