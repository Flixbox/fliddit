import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Chip,
    Avatar,
    Box,
    IconButton,
    CardActions,
    TextField,
    InputBase,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

import { VoteControls } from '.'
import { vote, editPost, deletePost } from '../actions/posts'

const useStyles = makeStyles(theme => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
    },
    editControls: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
    },
    content: {
        padding: theme.spacing(1),
        width: '100%',
    },
    chip: {
        marginRight: theme.spacing(1),
    },
    disabledInput: {
        color: 'white',
    },
}))

const PostCard = ({
    dispatch,
    linkingCard,
    author,
    body: bodyProp,
    category,
    commentCount,
    deleted,
    id,
    timestamp,
    title: titleProp,
    voteScore,
}) => {
    const classes = useStyles()
    const [title, setTitle] = useState('Loading title...')
    const [body, setBody] = useState('Loading body...')
    const [editMode, setEditMode] = useState(false)

    const reset = ({ title, body }) => {
        title && setTitle(title)
        body && setBody(body)
    }

    useEffect(() => {
        reset({ title: titleProp, body: bodyProp })
    }, [titleProp, bodyProp])

    console.log(titleProp)
    if (deleted) return null
    return (
        <Grid item xs={12} lg={6}>
            <Card>
                <Box className={classes.details}>
                    <Box className={classes.top}>
                        <Box className={classes.voteControls}>
                            <VoteControls
                                voteScore={voteScore}
                                upvote={() => dispatch(vote({ id, option: 'upVote' }))}
                                downvote={() => dispatch(vote({ id, option: 'downVote' }))}
                            />
                        </Box>
                        <Box
                            className={classes.content}
                            component={linkingCard && !editMode ? Link : Box}
                            to={linkingCard && `/${category}/${id}`}
                        >
                            {!editMode ? (
                                <>
                                    <Typography variant="h5">{title}</Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {body}
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <InputBase
                                        id="title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        fullWidth
                                        disabled={editMode ? false : true}
                                        classes={{
                                            disabled: classes.disabledInput,
                                        }}
                                    />
                                    <InputBase
                                        id="body"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                        fullWidth
                                        disabled={editMode ? false : true}
                                        classes={{
                                            disabled: classes.disabledInput,
                                        }}
                                    />
                                </>
                            )}
                        </Box>
                        <Box className={classes.editControls}>
                            {editMode ? (
                                <>
                                    <IconButton
                                        onClick={() => {
                                            setEditMode(false)
                                            dispatch(editPost({ id, title, body }))
                                        }}
                                    >
                                        <FontAwesomeIcon icon="save" />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            setEditMode(false)
                                            reset({ title: titleProp, body: bodyProp })
                                        }}
                                    >
                                        <FontAwesomeIcon icon="window-close" />
                                    </IconButton>
                                </>
                            ) : (
                                <>
                                    <IconButton onClick={() => setEditMode(true)}>
                                        <FontAwesomeIcon icon="edit" />
                                    </IconButton>
                                    <IconButton onClick={() => dispatch(deletePost({ id }))}>
                                        <FontAwesomeIcon icon="trash" />
                                    </IconButton>
                                </>
                            )}
                        </Box>
                    </Box>
                    <CardActions>
                        <Chip
                            className={classes.chip}
                            avatar={
                                <Avatar>
                                    <FontAwesomeIcon icon="user" />
                                </Avatar>
                            }
                            label={author}
                        />
                        <Chip
                            className={classes.chip}
                            avatar={
                                <Avatar>
                                    <FontAwesomeIcon icon="tag" />
                                </Avatar>
                            }
                            label={`${category}`}
                        />
                        <Chip
                            className={classes.chip}
                            avatar={
                                <Avatar>
                                    <FontAwesomeIcon icon="comments" />
                                </Avatar>
                            }
                            label={commentCount}
                        />
                        <Chip
                            className={classes.chip}
                            avatar={
                                <Avatar>
                                    <FontAwesomeIcon icon="calendar" />
                                </Avatar>
                            }
                            label={new Date(timestamp).toLocaleDateString()}
                        />
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(PostCard)
