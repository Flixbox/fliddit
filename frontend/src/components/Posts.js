import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
    Grid,
    Button,
    Typography,
    Box,
    Input,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PostCard, AddElementCard } from '.'
import { addPost, ADD_POST } from '../actions/posts'

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        margin: theme.spacing(1),
    },
}))

const Posts = ({ dispatch, match, posts, categories, category }) => {
    const classes = useStyles()
    const [sorting, setSorting] = useState({
        direction: 'desc',
        field: 'timestamp',
    })
    const [body, setBody] = useState('')
    const [title, setTitle] = useState('')
    const [newPostCategory, setNewPostCategory] = useState(category)
    const reset = () => {
        setTitle('')
        setBody('')
        setNewPostCategory(category)
    }
    const [retryMode, setRetryMode] = useState(false)
    const submitData = () => {
        if (!body) return null
        // Only reset the form if we are successful
        dispatch(addPost({ title, body, category: newPostCategory })).then(({ type }) =>
            type === `${ADD_POST}_SUCCESS` ? reset() : setRetryMode(true)
        )
    }

    useEffect(() => {
        if (!newPostCategory) {
            if (match.params.category) {
                setNewPostCategory(match.params.category)
            } else if (categories[0]) setNewPostCategory(categories[0].name)
        }
    }, [newPostCategory, categories, match.params.category])

    const postSort = (aId, bId) => {
        const { direction, field } = sorting
        const a = posts[aId]
        const b = posts[bId]

        if (direction === 'asc') return a[field] < b[field] ? 1 : -1
        return b[field] < a[field] ? 1 : -1
    }

    /**
     * Sets the new sorting field.
     * If a field is clicked repeatedly, the order is inverted.
     * @param {String} field The name of the field that should be sorted.
     */
    const sortClick = field => {
        setSorting({ field, direction: sorting.direction === 'desc' ? 'asc' : 'desc' })
    }

    const shouldDisplay = Object.keys(posts).length > 0 ? true : null

    return (
        <Grid container spacing={1}>
            {posts.length ? (
                <>
                    <Grid item xs={12}>
                        {shouldDisplay && (
                            <SortControl
                                post={posts[Object.keys(posts)[0]]}
                                sortClick={sortClick}
                                sorting={sorting}
                            />
                        )}
                    </Grid>
                    {shouldDisplay &&
                        Object.keys(posts)
                            .sort(postSort)
                            .map(id => (
                                <Grid item xs={12} lg={6} key={id}>
                                    <PostCard {...posts[id]} linkingCard={true} />
                                </Grid>
                            ))}
                </>
            ) : (
                <Typography>No Posts found!</Typography>
            )}
            <Grid item xs={12}>
                <Box mt={1}>
                    <AddElementCard
                        onSubmit={submitData}
                        retryMode={retryMode}
                        onRetry={submitData}
                    >
                        <Input
                            fullWidth
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Give your post a title..."
                            className={classes.formControl}
                        />
                        <Input
                            fullWidth
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            placeholder="Write a post body..."
                            className={classes.formControl}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="category">Category</InputLabel>
                            {newPostCategory && (
                                <Select
                                    value={newPostCategory}
                                    onChange={e => setNewPostCategory(e.target.value)}
                                    inputProps={{
                                        id: 'category',
                                    }}
                                    autoWidth
                                    style={{ minWidth: 'fit-content' }}
                                >
                                    {categories.map(category => (
                                        <MenuItem value={category.path} key={category.path}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        </FormControl>
                    </AddElementCard>
                </Box>
            </Grid>
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

const mapStateToProps = ({ categories, dispatch }) => ({ categories, dispatch })

export default connect(mapStateToProps)(withRouter(Posts))
