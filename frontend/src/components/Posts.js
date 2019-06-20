import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

import { PostCard } from '.'

const Posts = ({ posts }) => {
    const [sorting, setSorting] = useState({
        direction: 'desc',
        field: 'timestamp',
    })

    const postSort = (aId, bId) => {
        const { direction, field } = sorting
        const a = posts[aId]
        const b = posts[bId]

        if (direction === 'asc') return a[field] - b[field]
        return b[field] - a[field]
    }

    return (
        <Grid container spacing={1}>
            {Object.keys(posts).length &&
                Object.keys(posts)
                    .sort(postSort)
                    .map(id => <PostCard {...posts[id]} key={id} />)}
        </Grid>
    )
}

export default Posts
