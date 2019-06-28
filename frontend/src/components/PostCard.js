import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Typography, Card, Chip, Avatar, Box, CardActions, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'

import { VoteControls, EditControls } from '.'
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
    content: {
        padding: theme.spacing(1),
        width: '100%',
    },
    chip: {
        marginRight: theme.spacing(1),
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

    if (deleted) return null
    return (
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
                                <Input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    fullWidth
                                />
                                <Input
                                    value={body}
                                    onChange={e => setBody(e.target.value)}
                                    fullWidth
                                />
                            </>
                        )}
                    </Box>
                    <EditControls
                        editMode={editMode}
                        onSaveClick={() => {
                            setEditMode(false)
                            dispatch(editPost({ id, title, body }))
                        }}
                        onCancelClick={() => {
                            setEditMode(false)
                            reset({ title: titleProp, body: bodyProp })
                        }}
                        onEditClick={() => setEditMode(true)}
                        onTrashClick={() => dispatch(deletePost({ id }))}
                    />
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
    )
}

const mapDispatchToProps = dispatch => dispatch

export default connect(mapDispatchToProps)(PostCard)
