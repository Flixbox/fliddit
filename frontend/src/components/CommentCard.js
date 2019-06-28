import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Box, Typography, Card, CardActions, Chip, Avatar, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { VoteControls, EditControls } from '.'
import { vote, editComment, deleteComment } from '../actions/comments'

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
    },
    content: {
        padding: theme.spacing(1),
        width: '100%',
    },
    chip: {
        marginRight: theme.spacing(1),
    },
}))

const CommentCard = ({
    dispatch,
    author,
    body: bodyProp,
    deleted,
    id,
    parentDeleted,
    parentId,
    timestamp,
    voteScore,
}) => {
    const classes = useStyles()

    const [body, setBody] = useState('Loading body...')
    const [editMode, setEditMode] = useState(false)

    const reset = ({ body }) => {
        body && setBody(body)
    }

    useEffect(() => {
        reset({ body: bodyProp })
    }, [bodyProp])

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
                    <Box className={classes.content}>
                        {!editMode ? (
                            <Typography variant="subtitle1">{body}</Typography>
                        ) : (
                            <Input value={body} onChange={e => setBody(e.target.value)} fullWidth />
                        )}
                    </Box>
                    <EditControls
                        editMode={editMode}
                        onSaveClick={() => {
                            setEditMode(false)
                            dispatch(editComment({ id, body }))
                        }}
                        onCancelClick={() => {
                            setEditMode(false)
                            reset({ body: bodyProp })
                        }}
                        onEditClick={() => setEditMode(true)}
                        onTrashClick={() => dispatch(deleteComment({ id }))}
                    />
                </Box>
                <CardActions>
                    <Chip
                        className={classes.chip}
                        size="small"
                        avatar={
                            <Avatar>
                                <FontAwesomeIcon icon="user" />
                            </Avatar>
                        }
                        label={author}
                    />
                    <Chip
                        className={classes.chip}
                        size="small"
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

export default connect(mapDispatchToProps)(CommentCard)
