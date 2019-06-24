import React from 'react'
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

const useStyles = makeStyles(theme => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
    },
    content: {},
    chip: {
        marginRight: theme.spacing(1),
    },
}))

const PostCard = ({
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
            <Card className={classes.card}>
                <Box className={classes.details}>
                    <Box className={classes.top}>
                        <Box className={classes.controls}>
                            <FontAwesomeIcon icon="arrow-circle-up" />
                            <FontAwesomeIcon icon="arrow-circle-down" />
                        </Box>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {body}
                            </Typography>
                        </CardContent>
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
                        <IconButton style={{ marginLeft: 'auto' }}>
                            <FontAwesomeIcon icon="chevron-down" />
                        </IconButton>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    )
}

export default PostCard
