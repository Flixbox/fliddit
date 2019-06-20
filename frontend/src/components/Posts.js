import React, { useState } from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    const sortClick = field => {
        setSorting({ field })
    }

    const count = Object.keys(posts).length

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                {count && <SortControl post={posts[Object.keys(posts)[0]]} sortClick={sortClick} />}
            </Grid>
            {count &&
                Object.keys(posts)
                    .sort(postSort)
                    .map(id => <PostCard {...posts[id]} key={id} />)}
        </Grid>
    )
}

const SortControl = ({ post, sortClick }) => {
    const fields = Object.keys(post)
    return (
        <>
            {fields.map(field => (
                <SortButton field={field} sortClick={sortClick} key={field} />
            ))}
        </>
    )
}

const SortButton = ({ field, sortClick }) => {
    return <Button onClick={() => sortClick(field)}>{field} </Button>
}

export default Posts
