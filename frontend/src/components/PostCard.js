import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const PostCard = ({
    author,
    body,
    category,
    commentCount,
    deleted,
    id,
    timestamp,
    title,
    voteScore,
}) => {
    return (
        <Grid item>
            <Typography>{author}</Typography>
        </Grid>
    )
}

export default PostCard
