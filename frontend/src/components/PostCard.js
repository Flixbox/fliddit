import React from 'react'
import { Grid, Typography, Card, CardContent, Chip, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
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
    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {body}
                    </Typography>
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
                        label={`/${category}`}
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
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PostCard
