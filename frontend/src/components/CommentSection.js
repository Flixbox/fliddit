import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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
