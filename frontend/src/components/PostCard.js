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
import { vote } from '../actions/posts'

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
    disabledInput: {
        color: 'white',
    },
}))

const PostCard = ({
    dispatch,
    linkingCard,
    author,
    body,
    category,
    commentCount,
    deleted,
    id,
    timestamp,
    title: titleProp,
    voteScore,
}) => {
    const classes = useStyles()
    const [title, setTitle] = useState('Loading...')
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        titleProp && setTitle(titleProp)
    }, [titleProp])

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
                            component={linkingCard ? Link : Box}
                            to={linkingCard && `/${category}/${id}`}
                        >
                            {linkingCard ? (
                                <Typography variant="h5">{title}</Typography>
                            ) : (
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
                            )}

                            <Typography variant="subtitle1" color="textSecondary">
                                {body}
                            </Typography>
                        </Box>
                        <Box className={classes.editControls}>
                            <IconButton>
                                <FontAwesomeIcon icon="chevron-down" />
                            </IconButton>
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
