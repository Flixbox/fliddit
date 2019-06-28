import React, { useState, useEffect } from 'react'
import { Box, Input } from '@material-ui/core'

import { AddElementCard, CommentCard } from '.'

const CommentSection = ({ comments }) => {
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
                <AddElementCard onSubmit={() => console.log('Submit!')}>
                    <Input fullWidth value={body} onChange={e => setBody(e.target.value)} />
                </AddElementCard>
            </Box>
        </Box>
    )
}

export default CommentSection
