import React, { useState } from 'react'
import { Grid, Button, IconButton, Typography } from '@material-ui/core'

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
        debugger
        if (direction === 'asc') return a[field] - b[field]
        return b[field] - a[field]
    }

    /**
     * Sets the new sorting field.
     * If a field is clicked repeatedly, the order is inverted.
     * @param {String} field The name of the field that should be sorted.
     */
    const sortClick = field => {
        setSorting({ field, direction: sorting.direction === 'desc' ? 'asc' : 'desc' })
    }

    const count = Object.keys(posts).length

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                {count && (
                    <SortControl
                        post={posts[Object.keys(posts)[0]]}
                        sortClick={sortClick}
                        sorting={sorting}
                    />
                )}
            </Grid>
            {count &&
                Object.keys(posts)
                    .sort(postSort)
                    .map(id => <PostCard {...posts[id]} key={id} />)}
        </Grid>
    )
}

const SortControl = ({ post, sortClick, sorting }) => {
    const fields = Object.keys(post)
    return (
        <>
            <Typography>Sort by: </Typography>
            {fields.map(field => (
                <SortButton field={field} sortClick={sortClick} key={field} sorting={sorting} />
            ))}
        </>
    )
}

const SortButton = ({ field, sortClick, sorting }) => {
    const fieldName = field
    const renderIcon = ({ direction, field }) =>
        fieldName === field &&
        (direction === 'desc' ? (
            <FontAwesomeIcon icon="arrow-circle-down" />
        ) : (
            <FontAwesomeIcon icon="arrow-circle-up" />
        ))

    return (
        <Button onClick={() => sortClick(fieldName)}>
            {fieldName} {renderIcon(sorting)}
        </Button>
    )
}

export default Posts
