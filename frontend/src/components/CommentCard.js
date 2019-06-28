import React from 'react'
import { connect } from 'react-redux'
import { Box, Typography, Card, IconButton, CardActions, Chip, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { VoteControls } from '.'
import { vote } from '../actions/comments'

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

const CommentCard = ({
    dispatch,
    author,
    body,
    deleted,
    id,
    parentDeleted,
    parentId,
    timestamp,
    voteScore,
}) => {
    const classes = useStyles()

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
                        <Typography variant="body1">{body}</Typography>
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
