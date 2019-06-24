import React from 'react'
import { Box, Typography, Grid, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { VoteControls } from '.'

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
        <Grid item xs={12} lg={6}>
            <Card>
                <Box className={classes.details}>
                    <Box className={classes.top}>
                        <Box className={classes.voteControls}>
                            <VoteControls voteScore={voteScore} />
                        </Box>
                        <Box className={classes.content}>
                            <Typography variant="body1">{body}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default CommentCard
