import React from 'react'
import { Box, Typography, Grid, Card } from '@material-ui/core'
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
    editControls: {
        marginLeft: 'auto',
    },
    content: {},
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
                            <FontAwesomeIcon icon="arrow-circle-up" />
                            <FontAwesomeIcon icon="arrow-circle-down" />
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default CommentCard
