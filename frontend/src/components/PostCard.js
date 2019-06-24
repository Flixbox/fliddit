import React from 'react'
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
    },
    chip: {
        marginRight: theme.spacing(1),
    },
}))

const PostCard = ({
    dispatch,
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
    const classes = useStyles()

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
                        <Link to={`/${category}/${id}`}>
                            <Box className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {body}
                                </Typography>
                            </Box>
                        </Link>
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
