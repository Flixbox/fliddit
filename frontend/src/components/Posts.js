import React from 'react'
import { Grid } from '@material-ui/core'

import { PostCard } from '.'

const Posts = ({ posts }) => {
    console.log(posts)
    console.log(Object.keys(posts))
    return (
        <Grid container spacing="1">
            {Object.keys(posts).length &&
                Object.keys(posts).map(id => <PostCard {...posts[id]} key={id} />)}
        </Grid>
    )
}

export default Posts
